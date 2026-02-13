# CSS Animations

## 1. Fade-in Animation

**Dependencies:** None

Fade in an element from invisible to visible.

```css
@keyframes fadein {
  100% {
    opacity: 100;
  }
}

.fadein {
  animation-name: fadein;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
```

**Usage:**
```html
<img src="[image-url]" class="opacity-0 fadein" />
```

---

## 2. Modal Fade In

**Dependencies:** None

Scale and fade in for modals/dialogs.

```css
@keyframes mmfadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-fade-in {
  animation: mmfadeIn 0.3s cubic-bezier(0.0, 0.0, 0.2, 1) forwards;
}
```

---

## 3. Modal Fade Out

**Dependencies:** None

Scale and fade out for modals/dialogs.

```css
@keyframes mmfadeOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}

.modal-fade-out {
  animation: mmfadeOut 0.3s cubic-bezier(0.0, 0.0, 0.2, 1) forwards;
}
```

---

## 4. Hover Image Scale

**Dependencies:** None

Scale up an image on hover (commonly used on cards).

```css
.hover-scale {
  @apply transition duration-300 ease-out;
}

.group:hover .hover-scale {
  @apply scale-[1.02];
}
```

**Usage:**
```html
<article class="group">
  <div class="overflow-hidden rounded-[10px]">
    <img src="[image]" class="w-full h-full object-cover hover-scale" />
  </div>
</article>
```

---

## 5. Card Hover Effect

**Dependencies:** None

Opacity change on card hover.

```html
<article class="group duration-300 hover:opacity-70">
  <a href="[url]" class="block">
    <img src="[image]" class="w-full h-full object-cover" />
    <h3 class="font-semibold mt-4">[Title]</h3>
  </a>
</article>
```

---

## 6. Button Hover States

**Dependencies:** None

```css
/* Primary button hover */
.btn-primary {
  @apply bg-blk text-white border-2 border-blk transition-colors duration-300;
}

.btn-primary:hover {
  @apply bg-white text-blk;
}

/* Secondary button hover */
.btn-secondary {
  @apply bg-white text-blk border-2 border-blk transition-colors duration-300;
}

.btn-secondary:hover {
  @apply bg-blk text-white;
}

/* Link hover opacity */
.link-hover {
  @apply transition-opacity duration-300;
}

.link-hover:hover {
  @apply opacity-70;
}

/* Link hover underline */
.link-underline {
  @apply underline transition-opacity duration-300;
}

.link-underline:hover {
  @apply opacity-70;
}
```

---

## 7. Navigation Link Hover

**Dependencies:** None

```css
.nav-link {
  @apply text-lg font-semibold text-white transition-colors duration-300;
}

.nav-link:hover {
  @apply text-gris;
}
```

---

## 8. Accordion Animation

**Dependencies:** None

```css
.accordion-content {
  @apply overflow-hidden;
  transition: max-height 0.5s ease-out;
}

.accordion-content.accordion-content--closed {
  @apply max-h-0;
}

.accordion-button .toggle-icon {
  @apply transition-transform duration-300;
}

.accordion-button.active .toggle-icon {
  @apply rotate-45;
}
```

---

## 9. Scroll-triggered Reveal (Intersection Observer)

**Dependencies:** None

```css
.reveal {
  @apply opacity-0 translate-y-8 transition-all duration-700;
}

.reveal.active {
  @apply opacity-100 translate-y-0;
}
```

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 150;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Check on load
});
```

**Usage:**
```html
<section class="reveal">
  [Content that will fade in on scroll]
</section>
```
