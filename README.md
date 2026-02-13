# Pattern Library

A reusable component library extracted from the Amalgamotion 2025 WordPress theme. This library contains HTML/Tailwind patterns and WordPress ACF/PHP implementations for easy reuse in other projects.

## Structure

```
pattern-library/
├── 01-layouts-html/          # PURE HTML/TAILWIND - NO COLORS, NO JS
│   ├── 01-heroes.md
│   ├── 02-intro-sections.md
│   ├── 03-content-grids.md
│   ├── 04-cards.md
│   ├── 05-footer.md
│   └── 06-sliders.md
│
├── 02-components-html/       # PURE HTML/TAILWIND - NO COLORS, NO JS
│   ├── 01-buttons.md
│   ├── 02-navigation.md
│   ├── 03-accordions.md
│   └── 04-form-inputs.md
│
├── 03-animations/            # CSS animations library
│   ├── 01-fade-effects.md
│   ├── 02-transforms.md
│   ├── 03-hover-effects.md
│   └── 04-transitions.md
│
├── 04-interactions/          # JS handlers (optional add-on)
│   ├── 01-scroll-effects.md
│   ├── 02-click-handlers.md
│   └── 03-state-management.md
│
├── 05-acf-php/               # WordPress ACF implementations
│   ├── 01-heroes.md
│   ├── 02-intro-sections.md
│   ├── 03-case-studies.md
│   ├── 04-testimonials.md
│   └── 05-sliders.md
│
└── README.md
```

## Quick Reference

### Layouts (HTML)
- **Heroes**: Full-viewport, SVG overlay, split layout, minimal
- **Intro Sections**: Two-column image+text, centered text, logos grid, full-width bg, contact split
- **Content Grids**: Services 3-col, values with icons, staff grid, case study grid, logo grid
- **Cards**: Case study card, testimonial block, service card, blog post card, stat card
- **Footer**: 4-column layout with bottom bar
- **Sliders**: Logo carousel, image gallery, testimonial slider

### Components (HTML)
- **Buttons**: Primary, secondary, with icon, ghost, contact
- **Navigation**: Sticky header, mobile menu modal, breadcrumb, footer menu
- **Accordions**: Staff bio, FAQ, simple list
- **Form Inputs**: Floating label input, textarea, select, checkbox, radio, full form

### Animations (CSS)
- **Fade Effects**: Fade in, fade in up/down, delayed, hero image fade
- **Transforms**: Scale hover, rotate, translate, modal animations
- **Hover Effects**: Opacity, card hover, button hover, link underline, nav links
- **Transitions**: Smooth, color, transform, opacity, height, accordion, stagger

### Interactions (JS)
- **Scroll Effects**: Sticky header, hero fade-in triggers, smooth scroll, back to top
- **Click Handlers**: Category filter, view more, modal toggle, mobile menu
- **State Management**: Active states, form validation helpers

### ACF/PHP Patterns
- Ready-to-use WordPress components with ACF field integration
- Complete with field checks and WordPress escaping functions

## Dependencies

### Required
- Tailwind CSS v4.x

### Optional
- **Splide.js** v4.x - For all slider/carousel patterns
- **MicroModal.js** - For modal dialogs
- **animate-css-grid** - For animated grid filtering

## Design Approach

All layout and component patterns are **design-agnostic**:
- No background colors (`bg-*`)
- No text colors (`text-*`)
- No JavaScript
- Pure HTML/Tailwind structure

Apply your own design system by:
1. Adding color classes to the HTML
2. Selecting animations from `03-animations/`
3. Adding interactions from `04-interactions/` (optional)

## Unsplash Nature Images

Consistent placeholder images used throughout:
- **Mountains**: `photo-1464822759023-fed622ff2c3b`
- **Ocean**: `photo-1507525428034-b723cf961d3e`
- **Sunset**: `photo-1506905925346-21bda4d32df4`
- **Lake**: `photo-1501785888041-af3ef285b470`

All images: `?w=1920&h=1080&fit=crop` for consistent sizing

## Usage

### HTML/Tailwind Patterns
1. Copy the HTML pattern from `01-layouts-html/` or `02-components-html/`
2. Add your own color classes (e.g., `bg-blue-500`, `text-gray-900`)
3. Include any required JavaScript from the same file

### ACF/PHP Patterns
1. Copy the PHP pattern from `05-acf-php/`
2. Create corresponding ACF fields in WordPress admin
3. Include in your template file
4. Ensure proper escaping is maintained

### Animations
1. Copy the CSS animation from `03-animations/`
2. Add to your stylesheet or Tailwind config
3. Apply the animation class to your HTML elements

### Interactions (Optional)
1. Copy the JavaScript from `04-interactions/`
2. Add to your main JS file
3. Works with the HTML patterns to add behavior

## Browser Support

All patterns support:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- All patterns use semantic HTML5 elements
- Accessibility features included (ARIA labels, focus states)
- Responsive by default with mobile-first approach
- No jQuery required - vanilla JavaScript only
- Site-specific content has been removed and replaced with placeholders
