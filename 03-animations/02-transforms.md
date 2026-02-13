# Transforms

## Scale Hover

Scale up on hover.

```css
.hover-scale {
  transition: transform 0.3s ease-out;
}

.hover-scale:hover {
  transform: scale(1.02);
}
```

**Usage:**
```html
<img src="image.jpg" class="hover-scale" />
```

---

## Group Scale Hover

Scale child when parent is hovered.

```css
.group:hover .group-hover-scale {
  transform: scale(1.02);
}

.group-hover-scale {
  transition: transform 0.3s ease-out;
}
```

**Usage:**
```html
<article class="group">
  <img src="image.jpg" class="group-hover-scale" />
</article>
```

---

## Scale Down on Click

Quick scale down effect on active state.

```css
.active-scale:active {
  transform: scale(0.98);
}
```

---

## Rotate Icon

Rotate an icon on hover or when active.

```css
.rotate-45 {
  transform: rotate(45deg);
}

.rotate-180 {
  transform: rotate(180deg);
}

.transition-rotate {
  transition: transform 0.3s ease;
}
```

---

## Translate on Hover

Move element on hover.

```css
.hover-translate-x:hover {
  transform: translateX(4px);
}

.hover-translate-y:hover {
  transform: translateY(-4px);
}
```

---

## Modal Scale Animation

Scale up effect for modals.

```css
.modal-enter {
  opacity: 0;
  transform: scale(0.95);
  animation: modalenter 0.3s cubic-bezier(0.0, 0.0, 0.2, 1) forwards;
}

@keyframes modalenter {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-exit {
  opacity: 1;
  transform: scale(1);
  animation: modalexit 0.3s cubic-bezier(0.0, 0.0, 0.2, 1) forwards;
}

@keyframes modalexit {
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}
```
