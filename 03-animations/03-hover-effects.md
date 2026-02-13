# Hover Effects

## Opacity Hover

Fade on hover.

```css
.hover-opacity {
  transition: opacity 0.3s ease;
}

.hover-opacity:hover {
  opacity: 0.7;
}
```

---

## Card Hover

Combined effect for cards.

```css
.card-hover {
  transition: opacity 0.3s ease;
}

.card-hover:hover {
  opacity: 0.7;
}

.card-hover .card-image {
  transition: transform 0.3s ease-out;
}

.card-hover:hover .card-image {
  transform: scale(1.02);
}
```

**Usage:**
```html
<article class="card-hover">
  <img src="image.jpg" class="card-image" />
</article>
```

---

## Button Hover

Background and text color swap.

```css
.btn-hover {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

---

## Link Underline Hover

Underline animation.

```css
.link-underline {
  text-decoration: underline;
  transition: opacity 0.3s ease;
}

.link-underline:hover {
  opacity: 0.7;
}
```

---

## Nav Link Hover

Navigation link color change.

```css
.nav-link-hover {
  transition: color 0.3s ease;
}
```

---

## Image Grayscale Hover

Remove grayscale on hover.

```css
.hover-grayscale {
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.hover-grayscale:hover {
  filter: grayscale(0%);
}
```

---

## Lift on Hover

Subtle shadow lift effect.

```css
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}
```
