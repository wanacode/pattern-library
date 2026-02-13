# Transitions

## Smooth Transition

Base transition utility.

```css
.transition-smooth {
  transition: all 0.3s ease;
}
```

---

## Color Transition

Color-only transition.

```css
.transition-color {
  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}
```

---

## Transform Transition

Transform-only transition.

```css
.transition-transform {
  transition: transform 0.3s ease-out;
}
```

---

## Opacity Transition

Opacity-only transition.

```css
.transition-opacity {
  transition: opacity 0.3s ease;
}
```

---

## Height Transition

For accordions and expand/collapse.

```css
.transition-height {
  transition: max-height 0.5s ease-out;
}
```

---

## Accordion Content

Specific accordion transition.

```css
.accordion-content {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-out;
}

.accordion-content.open {
  max-height: 500px; /* Adjust based on content */
}
```

---

## Stagger Children

Delay children animations.

```css
.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 100ms; }
.stagger-children > *:nth-child(3) { animation-delay: 200ms; }
.stagger-children > *:nth-child(4) { animation-delay: 300ms; }
.stagger-children > *:nth-child(5) { animation-delay: 400ms; }
```

---

## Duration Utilities

```css
.duration-150 { transition-duration: 150ms; }
.duration-200 { transition-duration: 200ms; }
.duration-300 { transition-duration: 300ms; }
.duration-500 { transition-duration: 500ms; }
.duration-700 { transition-duration: 700ms; }
.duration-1000 { transition-duration: 1000ms; }
```

---

## Easing Functions

```css
.ease-linear { transition-timing-function: linear; }
.ease-in { transition-timing-function: ease-in; }
.ease-out { transition-timing-function: ease-out; }
.ease-in-out { transition-timing-function: ease-in-out; }
```
