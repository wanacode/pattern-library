# Click Handlers

## 1. Category Filter with Animation

**Dependencies:** animate-css-grid (optional, for smooth layout changes)

```html
<div class="grid-main">
  <!-- Filter Buttons -->
  <div class="col-span-full mb-8">
    <button class="category active-post mr-4 text-blk font-semibold underline" data-category="all">All</button>
    <button class="category mr-4 text-blk-light hover:text-blk transition-colors" data-category="category-1">Category 1</button>
    <button class="category mr-4 text-blk-light hover:text-blk transition-colors" data-category="category-2">Category 2</button>
    <button class="category text-blk-light hover:text-blk transition-colors" data-category="category-3">Category 3</button>
  </div>
  
  <!-- Grid Container -->
  <div class="posts col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <article class="casestudy-article category-1">
      [Card content]
    </article>
    <article class="casestudy-article category-2">
      [Card content]
    </article>
    <article class="casestudy-article category-1 category-3">
      [Card content]
    </article>
  </div>
</div>
```

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const categories = document.querySelectorAll('.category');
  const posts = document.querySelectorAll('.casestudy-article');
  
  categories.forEach(category => {
    category.addEventListener('click', () => {
      const isActive = category.classList.contains('active-post');
      const selected = category.getAttribute('data-category');
      
      // Remove active from all
      categories.forEach(c => {
        c.classList.remove('active-post');
        c.classList.add('text-blk-light');
        c.classList.remove('text-blk', 'font-semibold', 'underline');
      });
      
      if (!isActive) {
        // Activate clicked category
        category.classList.add('active-post', 'text-blk', 'font-semibold', 'underline');
        category.classList.remove('text-blk-light');
        
        // Filter posts
        posts.forEach(post => {
          if (post.classList.contains(selected) || selected === 'all') {
            post.classList.remove('hidden');
            post.classList.add('block');
          } else {
            post.classList.remove('block');
            post.classList.add('hidden');
          }
        });
      } else {
        // Show all if clicking active category again
        posts.forEach(post => {
          post.classList.remove('hidden');
          post.classList.add('block');
        });
      }
    });
  });
});
```

---

## 2. View More / Load More Button

**Dependencies:** None

```html
<div class="grid gap-8">
  <article class="staff-bio">[Content 1]</article>
  <article class="staff-bio">[Content 2]</article>
  <article class="staff-bio">[Content 3]</article>
  <article class="staff-bio hidden">[Content 4]</article>
  <article class="staff-bio hidden">[Content 5]</article>
  <article class="staff-bio hidden">[Content 6]</article>
</div>

<button class="view-more-btn mt-8 px-6 py-3 border-2 border-blk rounded-full font-semibold hover:bg-blk hover:text-white transition-colors">
  View More
</button>
```

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.staff-bio');
  const viewMoreBtn = document.querySelector('.view-more-btn');
  const itemsToShowInitially = 3;
  
  if (viewMoreBtn && items.length > itemsToShowInitially) {
    viewMoreBtn.addEventListener('click', function() {
      items.forEach((item, index) => {
        if (index >= itemsToShowInitially) {
          item.classList.remove('hidden');
        }
      });
      this.style.display = 'none';
    });
  } else if (viewMoreBtn) {
    viewMoreBtn.style.display = 'none';
  }
});
```

---

## 3. Modal Toggle (MicroModal)

**Dependencies:** MicroModal.js

```html
<!-- Trigger Button -->
<button data-micromodal-trigger="modal-1" class="px-6 py-3 bg-blk text-white rounded-full">
  Open Modal
</button>

<!-- Modal -->
<div id="modal-1" class="modal" aria-hidden="true">
  <div class="modal-overlay" tabindex="-1" data-micromodal-close>
    <div class="modal-container bg-white rounded-lg max-w-lg mx-auto p-8 mt-20" role="dialog" aria-modal="true">
      <header class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Modal Title</h2>
        <button class="p-2" aria-label="Close modal" data-micromodal-close>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </header>
      <div class="modal-content">
        [Modal content here]
      </div>
    </div>
  </div>
</div>
```

```javascript
document.addEventListener('DOMContentLoaded', function() {
  MicroModal.init({
    disableScroll: true,
    awaitCloseAnimation: true,
    onShow: modal => {
      console.log(`${modal.id} is shown`);
    },
    onClose: modal => {
      console.log(`${modal.id} is hidden`);
    }
  });
});
```

---

## 4. Mobile Menu Toggle (Custom)

**Dependencies:** None

Alternative to MicroModal for simple mobile menus.

```html
<button id="mobile-menu-toggle" class="lg:hidden p-2" aria-label="Toggle menu" aria-expanded="false">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
</button>

<nav id="mobile-menu" class="fixed inset-0 bg-white z-50 transform translate-x-full transition-transform duration-300 lg:hidden">
  <div class="p-6">
    <button id="mobile-menu-close" class="absolute top-6 right-6 p-2">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    <ul class="mt-16 space-y-6">
      <li><a href="[link-1]" class="text-xl font-semibold text-blk">[Link 1]</a></li>
      <li><a href="[link-2]" class="text-xl font-semibold text-blk">[Link 2]</a></li>
      <li><a href="[link-3]" class="text-xl font-semibold text-blk">[Link 3]</a></li>
    </ul>
  </div>
</nav>
```

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const close = document.getElementById('mobile-menu-close');
  const menu = document.getElementById('mobile-menu');
  
  if (toggle && menu) {
    const openMenu = () => {
      menu.classList.remove('translate-x-full');
      menu.classList.add('translate-x-0');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };
    
    const closeMenu = () => {
      menu.classList.remove('translate-x-0');
      menu.classList.add('translate-x-full');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };
    
    toggle.addEventListener('click', openMenu);
    close?.addEventListener('click', closeMenu);
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
      }
    });
  }
});
```
