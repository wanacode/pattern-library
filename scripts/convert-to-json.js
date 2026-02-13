const fs = require('fs');
const path = require('path');

function kebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function extractPatterns(content, category, subcategory) {
  const patterns = [];
  const lines = content.split('\n');
  let currentPattern = null;
  let currentDescription = [];
  let inCodeBlock = false;
  let codeContent = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('## ')) {
      // Save previous pattern
      if (currentPattern && codeContent) {
        patterns.push({
          id: kebabCase(currentPattern),
          name: currentPattern,
          category: category,
          subcategory: subcategory,
          description: currentDescription.join(' ').trim() || `${currentPattern} pattern`,
          html: codeContent.trim(),
          tags: [subcategory, category],
          screenshots: {
            mobile: `screenshots/${category}/${subcategory}/${kebabCase(currentPattern)}-mobile.png`,
            tablet: `screenshots/${category}/${subcategory}/${kebabCase(currentPattern)}-tablet.png`,
            desktop: `screenshots/${category}/${subcategory}/${kebabCase(currentPattern)}-desktop.png`
          }
        });
      }
      currentPattern = line.replace('## ', '').trim();
      currentDescription = [];
      codeContent = '';
      inCodeBlock = false;
    } else if (line.startsWith('```html')) {
      inCodeBlock = true;
      codeContent = '';
    } else if (line.startsWith('```') && inCodeBlock) {
      inCodeBlock = false;
    } else if (inCodeBlock) {
      codeContent += line + '\n';
    } else if (line.trim() && !line.startsWith('http') && !line.startsWith('---')) {
      currentDescription.push(line.trim());
    }
  }
  
  // Save last pattern
  if (currentPattern && codeContent) {
    patterns.push({
      id: kebabCase(currentPattern),
      name: currentPattern,
      category: category,
      subcategory: subcategory,
      description: currentDescription.join(' ').trim() || `${currentPattern} pattern`,
      html: codeContent.trim(),
      tags: [subcategory, category],
      screenshots: {
        mobile: `screenshots/${category}/${subcategory}/${kebabCase(currentPattern)}-mobile.png`,
        tablet: `screenshots/${category}/${subcategory}/${kebabCase(currentPattern)}-tablet.png`,
        desktop: `screenshots/${category}/${subcategory}/${kebabCase(currentPattern)}-desktop.png`
      }
    });
  }
  
  return patterns;
}

function convertMarkdownToJson() {
  const baseDir = path.join(__dirname, '..');
  const layoutsDir = path.join(baseDir, '01-layouts-html');
  const componentsDir = path.join(baseDir, '02-components-html');
  const animationsDir = path.join(baseDir, '03-animations');
  const jsonDir = path.join(baseDir, 'json');
  
  // Ensure directories exist
  ['layouts', 'components', 'animations'].forEach(dir => {
    const fullPath = path.join(jsonDir, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  });
  
  // Process layouts
  if (fs.existsSync(layoutsDir)) {
    const files = fs.readdirSync(layoutsDir).filter(f => f.endsWith('.md'));
    files.forEach(file => {
      const content = fs.readFileSync(path.join(layoutsDir, file), 'utf8');
      const subcategory = path.basename(file, '.md').replace(/^\d+-/, '');
      const patterns = extractPatterns(content, 'layouts', subcategory);
      
      const outputDir = path.join(jsonDir, 'layouts', subcategory);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      patterns.forEach(pattern => {
        const outputFile = path.join(outputDir, `${pattern.id}.json`);
        fs.writeFileSync(outputFile, JSON.stringify(pattern, null, 2));
        console.log(`Created: ${outputFile}`);
      });
    });
  }
  
  // Process components
  if (fs.existsSync(componentsDir)) {
    const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.md'));
    files.forEach(file => {
      const content = fs.readFileSync(path.join(componentsDir, file), 'utf8');
      const subcategory = path.basename(file, '.md').replace(/^\d+-/, '');
      const patterns = extractPatterns(content, 'components', subcategory);
      
      const outputDir = path.join(jsonDir, 'components', subcategory);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      patterns.forEach(pattern => {
        const outputFile = path.join(outputDir, `${pattern.id}.json`);
        fs.writeFileSync(outputFile, JSON.stringify(pattern, null, 2));
        console.log(`Created: ${outputFile}`);
      });
    });
  }
  
  // Process animations (different structure)
  if (fs.existsSync(animationsDir)) {
    const files = fs.readdirSync(animationsDir).filter(f => f.endsWith('.md'));
    files.forEach(file => {
      const content = fs.readFileSync(path.join(animationsDir, file), 'utf8');
      const subcategory = path.basename(file, '.md').replace(/^\d+-/, '');
      
      // Parse animations differently
      const patterns = extractAnimations(content, subcategory);
      
      const outputDir = path.join(jsonDir, 'animations', subcategory);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      patterns.forEach(pattern => {
        const outputFile = path.join(outputDir, `${pattern.id}.json`);
        fs.writeFileSync(outputFile, JSON.stringify(pattern, null, 2));
        console.log(`Created: ${outputFile}`);
      });
    });
  }
  
  console.log('\nConversion complete!');
}

function extractAnimations(content, subcategory) {
  const patterns = [];
  const sections = content.split(/\n## /);
  
  sections.forEach((section, index) => {
    if (index === 0 && !section.startsWith('#')) return;
    
    const lines = section.split('\n');
    const name = lines[0].replace(/^#+ /, '').trim();
    const cssMatch = section.match(/```css\n([\s\S]*?)```/);
    const htmlMatch = section.match(/```html\n([\s\S]*?)```/);
    
    if (cssMatch) {
      patterns.push({
        id: kebabCase(name),
        name: name,
        category: 'animations',
        subcategory: subcategory,
        description: `CSS animation: ${name}`,
        css: cssMatch[1].trim(),
        html: htmlMatch ? htmlMatch[1].trim() : '',
        tags: ['animation', subcategory],
        screenshots: null // Animations don't have screenshots
      });
    }
  });
  
  return patterns;
}

convertMarkdownToJson();
