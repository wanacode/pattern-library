const fs = require('fs');
const path = require('path');

function loadPatterns() {
  const patterns = [];
  const jsonDir = path.join(__dirname, '..', 'json');
  
  function scanDir(dir, category) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDir(fullPath, category);
      } else if (item.endsWith('.json')) {
        const pattern = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
        patterns.push(pattern);
      }
    });
  }
  
  ['layouts', 'components', 'animations'].forEach(category => {
    const categoryDir = path.join(jsonDir, category);
    if (fs.existsSync(categoryDir)) {
      scanDir(categoryDir, category);
    }
  });
  
  return patterns;
}

function generateViewer() {
  const patterns = loadPatterns();
  const viewerDir = path.join(__dirname, '..', 'viewer');
  
  if (!fs.existsSync(viewerDir)) {
    fs.mkdirSync(viewerDir, { recursive: true });
  }
  
  // Group patterns by category
  const grouped = patterns.reduce((acc, pattern) => {
    if (!acc[pattern.category]) acc[pattern.category] = [];
    acc[pattern.category].push(pattern);
    return acc;
  }, {});
  
  // Generate HTML
  const html = generateHTML(grouped, patterns);
  fs.writeFileSync(path.join(viewerDir, 'index.html'), html);
  
  // Copy CSS
  const css = generateCSS();
  fs.writeFileSync(path.join(viewerDir, 'styles.css'), css);
  
  // Generate JS
  const js = generateJS(patterns);
  fs.writeFileSync(path.join(viewerDir, 'app.js'), js);
  
  console.log(`Generated viewer with ${patterns.length} patterns`);
  console.log(`Output: ${viewerDir}/index.html`);
}

function generateHTML(grouped, allPatterns) {
  const categories = Object.keys(grouped).sort();
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pattern Library</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="app">
    <aside class="sidebar">
      <h1>Pattern Library</h1>
      
      <div class="filter-section">
        <h3>Categories</h3>
        <div class="checkbox-group">
          ${categories.map(cat => `
            <label class="checkbox">
              <input type="checkbox" value="${cat}" checked data-filter="category">
              <span>${cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
            </label>
          `).join('')}
        </div>
      </div>
      
      <div class="filter-section">
        <h3>Subcategories</h3>
        <div class="checkbox-group" id="subcategory-filters">
          ${getSubcategoryFilters(allPatterns)}
        </div>
      </div>
      
      <div class="stats">
        <p>Showing <span id="count">${allPatterns.length}</span> patterns</p>
      </div>
    </aside>
    
    <main class="main">
      <div class="pattern-grid" id="pattern-grid">
        ${allPatterns.map(pattern => createPatternCard(pattern)).join('')}
      </div>
    </main>
    
    <div class="modal" id="modal">
      <div class="modal-content">
        <button class="modal-close" id="modal-close">&times;</button>
        <div id="modal-body"></div>
      </div>
    </div>
  </div>
  
  <script src="app.js"></script>
</body>
</html>`;
}

function getSubcategoryFilters(patterns) {
  const subcats = [...new Set(patterns.map(p => p.subcategory))].sort();
  return subcats.map(sub => `
    <label class="checkbox">
      <input type="checkbox" value="${sub}" checked data-filter="subcategory">
      <span>${sub.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
    </label>
  `).join('');
}

function createPatternCard(pattern) {
  const hasScreenshots = pattern.screenshots && pattern.screenshots.desktop;
  const screenshotPath = hasScreenshots ? pattern.screenshots.desktop : '';
  
  return `
    <div class="pattern-card" data-category="${pattern.category}" data-subcategory="${pattern.subcategory}" data-id="${pattern.id}">
      <div class="pattern-thumbnail">
        ${hasScreenshots ? `<img src="${screenshotPath}" alt="${pattern.name}" loading="lazy">` : '<div class="no-screenshot">No Preview</div>'}
      </div>
      <div class="pattern-info">
        <span class="pattern-category">${pattern.subcategory}</span>
        <h3 class="pattern-name">${pattern.name}</h3>
        <p class="pattern-description">${pattern.description || ''}</p>
      </div>
    </div>
  `;
}

function generateCSS() {
  return `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: #f5f5f5;
  color: #333;
}

.app {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 280px;
  background: #fff;
  border-right: 1px solid #e0e0e0;
  padding: 24px;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
}

.sidebar h1 {
  font-size: 24px;
  margin-bottom: 24px;
  color: #111;
}

.filter-section {
  margin-bottom: 24px;
}

.filter-section h3 {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #666;
  margin-bottom: 12px;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
}

.checkbox input {
  margin-right: 8px;
}

.stats {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e0e0e0;
  font-size: 14px;
  color: #666;
}

.main {
  flex: 1;
  margin-left: 280px;
  padding: 24px;
}

.pattern-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.pattern-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.pattern-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.pattern-thumbnail {
  aspect-ratio: 16/10;
  background: #f0f0f0;
  overflow: hidden;
}

.pattern-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.no-screenshot {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;
}

.pattern-info {
  padding: 16px;
}

.pattern-category {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #666;
  display: block;
  margin-bottom: 4px;
}

.pattern-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #111;
}

.pattern-description {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Modal */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  z-index: 1000;
  overflow-y: auto;
}

.modal.active {
  display: block;
}

.modal-content {
  background: #fff;
  max-width: 900px;
  margin: 40px auto;
  border-radius: 8px;
  position: relative;
  padding: 32px;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
}

.modal-close:hover {
  color: #111;
}

.pattern-detail h2 {
  font-size: 24px;
  margin-bottom: 8px;
}

.pattern-detail .meta {
  color: #666;
  margin-bottom: 24px;
}

.screenshot-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.tab-btn {
  padding: 8px 16px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  border-radius: 4px;
}

.tab-btn.active {
  background: #111;
  color: #fff;
  border-color: #111;
}

.screenshot-display {
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
}

.screenshot-display img {
  width: 100%;
  display: block;
}

.code-section {
  margin-bottom: 24px;
}

.code-section h3 {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #666;
  margin-bottom: 12px;
}

.code-block {
  position: relative;
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
}

.code-block pre {
  padding: 16px;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.5;
  color: #d4d4d4;
}

.copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 6px 12px;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}

.copy-btn:hover {
  background: #444;
}

.copy-btn.copied {
  background: #28a745;
}
`;
}

function generateJS(patterns) {
  return `const patterns = ${JSON.stringify(patterns)};

// Filter functionality
document.querySelectorAll('[data-filter]').forEach(checkbox => {
  checkbox.addEventListener('change', filterPatterns);
});

function filterPatterns() {
  const categoryFilters = Array.from(document.querySelectorAll('[data-filter="category"]:checked')).map(cb => cb.value);
  const subcategoryFilters = Array.from(document.querySelectorAll('[data-filter="subcategory"]:checked')).map(cb => cb.value);
  
  document.querySelectorAll('.pattern-card').forEach(card => {
    const category = card.dataset.category;
    const subcategory = card.dataset.subcategory;
    
    const show = categoryFilters.includes(category) && subcategoryFilters.includes(subcategory);
    card.style.display = show ? 'block' : 'none';
  });
  
  const visible = document.querySelectorAll('.pattern-card:not([style*="none"])').length;
  document.getElementById('count').textContent = visible;
}

// Modal functionality
document.querySelectorAll('.pattern-card').forEach(card => {
  card.addEventListener('click', () => {
    const patternId = card.dataset.id;
    const pattern = patterns.find(p => p.id === patternId);
    if (pattern) showModal(pattern);
  });
});

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target.id === 'modal') closeModal();
});

function showModal(pattern) {
  const modal = document.getElementById('modal');
  const body = document.getElementById('modal-body');
  
  const hasScreenshots = pattern.screenshots && pattern.screenshots.desktop;
  
  body.innerHTML = \`
    <div class="pattern-detail">
      <h2>\${pattern.name}</h2>
      <p class="meta">\${pattern.category} / \${pattern.subcategory}</p>
      
      \${hasScreenshots ? \`
        <div class="screenshot-section">
          <div class="screenshot-tabs">
            <button class="tab-btn active" data-tab="desktop">Desktop</button>
            <button class="tab-btn" data-tab="tablet">Tablet</button>
            <button class="tab-btn" data-tab="mobile">Mobile</button>
          </div>
          <div class="screenshot-display" id="screenshot-display">
            <img src="\${pattern.screenshots.desktop}" alt="Desktop view">
          </div>
        </div>
      \` : ''}
      
      <div class="code-section">
        <h3>HTML</h3>
        <div class="code-block">
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          <pre><code>\${escapeHtml(pattern.html)}</code></pre>
        </div>
      </div>
      
      \${pattern.css ? \`
        <div class="code-section">
          <h3>CSS</h3>
          <div class="code-block">
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
            <pre><code>\${escapeHtml(pattern.css)}</code></pre>
          </div>
        </div>
      \` : ''}
    </div>
  \`;
  
  // Tab functionality
  if (hasScreenshots) {
    body.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        body.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.dataset.tab;
        const display = document.getElementById('screenshot-display');
        display.innerHTML = \`<img src="\${pattern.screenshots[tab]}" alt="\${tab} view">\`;
      });
    });
  }
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  document.body.style.overflow = '';
}

function copyCode(btn) {
  const code = btn.nextElementSibling.textContent;
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 2000);
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
`;
}

generateViewer();
