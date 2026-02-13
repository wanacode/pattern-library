const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { marked } = require('marked');

const BREAKPOINTS = [
  { name: 'mobile', width: 375, height: 800 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 }
];

const CATEGORIES = ['01-layouts-html', '02-components-html'];

function kebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function extractPatterns(content) {
  const patterns = [];
  const lines = content.split('\n');
  let currentPattern = null;
  let inCodeBlock = false;
  let codeContent = '';

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentPattern && codeContent) {
        patterns.push({
          name: currentPattern,
          html: codeContent.trim()
        });
      }
      currentPattern = line.replace('## ', '').trim();
      codeContent = '';
      inCodeBlock = false;
    } else if (line.startsWith('```html')) {
      inCodeBlock = true;
      codeContent = '';
    } else if (line.startsWith('```') && inCodeBlock) {
      inCodeBlock = false;
    } else if (inCodeBlock) {
      codeContent += line + '\n';
    }
  }

  if (currentPattern && codeContent) {
    patterns.push({
      name: currentPattern,
      html: codeContent.trim()
    });
  }

  return patterns;
}

async function generateScreenshots() {
  console.log('Installing Playwright browsers...');
  
  const browser = await chromium.launch();
  const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
  
  for (const category of CATEGORIES) {
    const categoryPath = path.join(__dirname, '..', category);
    
    if (!fs.existsSync(categoryPath)) {
      console.log(`Category not found: ${category}`);
      continue;
    }

    const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));
    
    for (const file of files) {
      const filePath = path.join(categoryPath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const patterns = extractPatterns(content);
      
      if (patterns.length === 0) {
        console.log(`No patterns found in ${file}`);
        continue;
      }

      const fileBase = path.basename(file, '.md');
      
      for (const pattern of patterns) {
        const patternSlug = kebabCase(pattern.name);
        
        for (const breakpoint of BREAKPOINTS) {
          const screenshotDir = path.join(__dirname, '..', 'screenshots', category);
          const screenshotPath = path.join(
            screenshotDir,
            `${fileBase}-${patternSlug}-${breakpoint.name}.png`
          );

          if (fs.existsSync(screenshotPath)) {
            console.log(`Skipping (exists): ${path.relative(__dirname, screenshotPath)}`);
            continue;
          }

          console.log(`Generating: ${category}/${fileBase}-${patternSlug}-${breakpoint.name}.png`);

          const page = await browser.newPage({
            viewport: { width: breakpoint.width, height: breakpoint.height }
          });

          const htmlContent = template.replace('<!-- PATTERN_HTML -->', pattern.html);
          await page.setContent(htmlContent, { waitUntil: 'networkidle' });

          await page.waitForTimeout(500);

          const container = await page.locator('#pattern-container');
          const box = await container.boundingBox();

          if (box && box.height > 0) {
            if (!fs.existsSync(screenshotDir)) {
              fs.mkdirSync(screenshotDir, { recursive: true });
            }

            await page.screenshot({
              path: screenshotPath,
              clip: {
                x: box.x,
                y: box.y,
                width: box.width,
                height: box.height
              }
            });
          }

          await page.close();
        }
      }
    }
  }

  await browser.close();
  console.log('\nScreenshots complete!');
}

generateScreenshots().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
