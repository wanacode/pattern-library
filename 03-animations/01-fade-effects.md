# Fade Effects

## Fade In

Fade in an element from invisible to visible.

```css
.animate-fade-in {
  opacity: 0;
  animation: fadein 1s forwards;
}

@keyframes fadein {
  to {
    opacity: 1;
  }
}
```

**Usage:**
```html
<img src="image.jpg" class="animate-fade-in" />
```

---

## Fade In Up

Fade in while moving up.

```css
.animate-fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeinup 0.6s forwards;
}

@keyframes fadeinup {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## Fade In Down

Fade in while moving down.

```css
.animate-fade-in-down {
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeindown 0.6s forwards;
}

@keyframes fadeindown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## Fade In Delayed

Fade in with a delay.

```css
.animate-fade-in-delayed {
  opacity: 0;
  animation: fadein 1s 0.3s forwards;
}
```

---

## Hero Image Fade

Specific fade for hero images on page load.

```css
.hero-image {
  opacity: 0;
}

.hero-image.loaded {
  animation: herofade 1s forwards;
}

@keyframes herofade {
  to {
    opacity: 1;
  }
}
```

**Usage with JS:**
```javascript
// Add 'loaded' class when image is ready
img.addEventListener('load', () => img.classList.add('loaded'));
```
