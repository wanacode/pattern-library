# Pattern Library Import Tool - Implementation Plan

## Overview
Tool to import patterns from external repositories/projects into the pattern library.

**Status:** Deferred - implement after viewer is complete and pattern library is moved to its own repo

## Features

### 1. Repository Analysis (Static Analysis - Option A)
- Scan local or remote git repositories
- Parse HTML, PHP, JSX, Vue files
- Identify Tailwind CSS patterns using AST parsing
- Extract responsive breakpoints
- Detect layout structures (grid, flex, etc.)

### 2. Pattern Extraction
- Extract HTML blocks with Tailwind classes
- Remove project-specific styling (bg-*, text-* colors)
- Replace project images with Unsplash placeholders
- Standardize code formatting
- Generate metadata (tags, descriptions)

### 3. Similarity Detection
- Compare extracted patterns with existing library
- Similarity threshold: 80% (configurable in config)
- Weighted comparison:
  - DOM structure: 40%
  - Class overlap: 35%
  - Layout type: 25%

### 4. Interactive Merge
- Show side-by-side comparison for conflicts
- Options:
  - Skip (duplicate)
  - Import as new
  - Import as variant (auto-renamed)
  - Replace existing
  - Merge features
- CLI-based interface with keyboard navigation

## Command Interface

```bash
# Import from local project
npx pattern-library import /path/to/project

# Import specific patterns only
npx pattern-library import /path/to/project --select

# Set similarity threshold
npx pattern-library import /path/to/project --threshold=0.85

# Non-interactive (import all as new)
npx pattern-library import /path/to/project --auto
```

## Implementation Notes

### File Structure When Implemented
```
pattern-library/
├── scripts/
│   ├── import-from-repo.js      # Main entry point
│   ├── analyze-repo.js          # Repository scanner
│   ├── extract-patterns.js      # Pattern extraction
│   ├── similarity-check.js      # Pattern comparison
│   └── interactive-merge.js     # CLI prompts
├── config/
│   └── import-config.json       # Settings
└── src/
    ├── parser/                  # HTML/JSX parsers
    └── utils/
```

### Dependencies to Add
- `glob` - File pattern matching
- `cheerio` or `node-html-parser` - HTML parsing
- `inquirer` - CLI prompts
- `chalk` - Colored console output
- `ora` - Loading spinners

### Algorithm Notes

**Similarity Calculation:**
```javascript
function calculateSimilarity(patternA, patternB) {
  const domSim = compareDOMStructure(patternA.html, patternB.html);
  const classSim = compareClassLists(patternA.html, patternB.html);
  const layoutSim = detectLayoutType(patternA.html) === detectLayoutType(patternB.html) ? 1 : 0;
  
  return (domSim * 0.4) + (classSim * 0.35) + (layoutSim * 0.25);
}
```

**Layout Type Detection:**
- Check for `grid`, `flex` classes
- Analyze grid column patterns
- Identify common structures (hero, card, grid, etc.)

## Deferred Tasks

1. [ ] Implement repository analyzer
2. [ ] Build pattern extraction engine
3. [ ] Create similarity algorithm
4. [ ] Build interactive CLI
5. [ ] Add configuration file support
6. [ ] Write tests for extraction accuracy
7. [ ] Document import workflow

## Usage Workflow (When Complete)

1. Run import tool on old project
2. Review extracted patterns list
3. Select patterns to import (checkboxes)
4. Review conflicts (>80% similarity)
5. Decide action for each conflict
6. Patterns auto-formatted and saved to JSON
7. Run `npm run screenshots` to generate previews
8. Run `npm run viewer` to see imported patterns

## Notes

- Import tool will work with the JSON format
- Screenshots generated after import
- User maintains control over what gets imported
- Git history preserved via git commits
- No versioning needed - use git for rollbacks
