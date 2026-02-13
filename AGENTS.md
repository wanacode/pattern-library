# AGENTS.md

Guidelines for AI agents working in this pattern library repository.

## Build Commands

```bash
# Install dependencies (uses pnpm exclusively)
pnpm install

# Build the viewer (converts markdown patterns to JSON and generates HTML viewer)
pnpm run build

# Build docs folder only (for GitHub Pages)
pnpm run build:docs

# Start local development server (serves docs/ folder)
pnpm run serve

# Start local development server (serves viewer/ folder)
pnpm run serve:viewer

# Generate screenshots for patterns (requires Playwright browsers)
pnpm run screenshots

# Deploy to GitHub Pages
pnpm run deploy
```

## GitHub Pages Deployment

The site is deployed to GitHub Pages using GitHub Actions. The workflow:
1. Builds the project (`pnpm run build`)
2. Copies files to `/docs` folder
3. Deploys the docs folder to GitHub Pages

The `/docs` folder is gitignored and generated during CI, so don't commit it manually.

## Package Manager

**ALWAYS use pnpm.** This project enforces pnpm via `packageManager` field in package.json.
- Never use npm or yarn
- Lock file: `pnpm-lock.yaml` (already in repo)

## Code Style

### JavaScript (Node.js Scripts)

**Formatting:**
- 2 spaces for indentation
- Single quotes for strings
- Semicolons required
- No trailing commas in multi-line objects/arrays
- Max line length: 100 characters

**Naming:**
- Functions: camelCase (`generateViewer`, `loadPatterns`)
- Constants: UPPER_SNAKE_CASE for true constants (`BREAKPOINTS`, `CATEGORIES`)
- Variables: camelCase
- Files: kebab-case (`convert-to-json.js`, `build-viewer.js`)

**Imports:**
- Use CommonJS `require()` (Node.js project)
- Order: built-ins, then npm packages, then local modules
- Group with blank line between sections

**Error Handling:**
- Always check `fs.existsSync()` before file operations
- Use try-catch for async operations
- Log errors with `console.error()` and exit with code 1

### Markdown Patterns

**Structure:**
- Use ## for pattern names (H2)
- Include Tailwind Play URL after pattern name (if available)
- Code blocks use ```html
- Separate patterns with ---

**HTML Patterns:**
- Pure HTML/Tailwind - NO colors, NO JS
- Use semantic HTML5 elements
- Include ARIA labels for accessibility
- Mobile-first responsive design
- Use Unsplash nature images with consistent sizing (`?w=1920&h=1080&fit=crop`)

## File Organization

```
pattern-library/
├── 01-layouts-html/      # Layout patterns (heroes, grids, cards)
├── 02-components-html/   # Component patterns (buttons, forms)
├── 03-animations/        # CSS animation patterns
├── 04-interactions/      # JS interaction patterns (optional)
├── 05-acf-php/          # WordPress ACF implementations
├── scripts/             # Build tools (Node.js)
├── viewer/              # Generated HTML viewer (don't edit directly)
├── json/                # Generated JSON files (don't edit directly)
└── screenshots/         # Pattern screenshots
```

## Pattern ID Convention

Pattern IDs are auto-generated from pattern names using kebab-case:
- "Full Viewport with Bottom Text" → `full-viewport-with-bottom-text`
- Function: `kebabCase(str)` in scripts

## Dependencies

**Required:**
- Node.js >= 18
- pnpm 9.x

**Runtime:**
- marked: Markdown parsing
- playwright: Screenshot generation

## Testing

**No test suite currently configured.** When adding tests:
- Use a Node.js test runner (built-in `node:test` or Vitest)
- Place tests in `__tests__/` directories or `*.test.js` files
- Run single test: `node --test path/to/test.js`

## Linting

**No linter currently configured.** Consider adding:
- ESLint for JavaScript
- Markdownlint for pattern documentation

## Git Workflow

- Work on feature branches
- Commit message format: "Present tense, descriptive, under 72 chars"
- Example: "Add card hover animation patterns"

## Accessibility Requirements

All patterns must include:
- Semantic HTML5 elements
- ARIA labels where appropriate
- Focus states for interactive elements
- Alt text for images

## Browser Support

Target: Chrome/Edge, Firefox, Safari (latest 2 versions), Mobile browsers
