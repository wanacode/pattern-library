# Scroll Effects

## 1. Sticky Header on Scroll

**Dependencies:** None

Adds a class to the header when the user scrolls down.

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const stickyContainer = document.querySelector('.site-header');
  
  if (stickyContainer) {
    const toggleStickyHeader = () => {
      if (window.scrollY > 0) {
        stickyContainer.classList.add('dark-header');
      } else {
        stickyContainer.classList.remove('dark-header');
      }
    };
    
    window.addEventListener('scroll', toggleStickyHeader);
    window.addEventListener('resize', toggleStickyHeader);
    toggleStickyHeader(); // Check initial position
  }
});
```

**Related CSS:**
```css
.site-header {
  @apply fixed z-50 w-full transition-colors;
}

.dark-header .site-header {
  @apply bg-blk;
}
```

---

## 2. Hero Image Fade-in on Load

**Dependencies:** None

Fades in the hero image once it's fully loaded.

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const heroImg = document.getElementById("hero-image");
  
  if (heroImg) {
    const handleLoad = () => {
      heroImg.classList.add("fadein");
    };
    
    if (heroImg.complete) {
      handleLoad();
    } else {
      heroImg.onload = handleLoad;
    }
  }
});
```

**Related CSS:**
```css
#hero-image {
  @apply opacity-0;
}

.fadein {
  animation: fadein 1s forwards;
}

@keyframes fadein {
  100% {
    opacity: 100;
  }
}
```

---

## 3. Smooth Scroll to Anchor Links

**Dependencies:** None

```javascript
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
```

**Related CSS (add to html):**
```css
html {
  scroll-behavior: smooth;
}
```

---

## 4. Back to Top Button

**Dependencies:** None

Shows a button when scrolling down, hides at top.

```html
<button id="back-to-top" class="fixed bottom-8 right-8 bg-blk text-white p-3 rounded-full opacity-0 pointer-events-none transition-opacity duration-300 hover:bg-blk-light z-50" aria-label="Back to top">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
  </svg>
</button>
```

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.getElementById('back-to-top');
  
  if (backToTopBtn) {
    const toggleBackToTop = () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100');
      }
    };
    
    window.addEventListener('scroll', toggleBackToTop);
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
```
