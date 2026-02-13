# Navigation

## Sticky Header with Logo

```html
<header class="fixed z-50 w-full transition-colors top-0">
  <div class="flex items-center justify-between px-6 xl:px-20 h-20">
    <a href="#" class="relative z-10">
      <img src="https://placehold.co/200x48?text=Logo" alt="Site name" class="h-10 w-auto" />
    </a>
    
    <nav class="hidden lg:block">
      <ul class="flex space-x-12">
        <li><a href="#" class="text-lg font-semibold transition-colors">Link 1</a></li>
        <li><a href="#" class="text-lg font-semibold transition-colors">Link 2</a></li>
        <li><a href="#" class="text-lg font-semibold transition-colors">Link 3</a></li>
      </ul>
    </nav>
    
    <a href="#" class="hidden lg:inline-block rounded-full px-6 py-2 font-semibold transition-colors">
      Contact
    </a>
    
    <button class="lg:hidden relative z-10 p-2" aria-label="Open menu" aria-expanded="false">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect width="24" height="2"/>
        <rect y="7" width="24" height="2"/>
        <rect y="14" width="24" height="2"/>
      </svg>
    </button>
  </div>
</header>
```

---

## Mobile Menu Modal

**Dependencies:** MicroModal.js

```html
<div class="modal" aria-hidden="true">
  <div class="modal-overlay" tabindex="-1">
    <div class="modal-container w-full h-full p-6" role="dialog" aria-modal="true">
      <button class="absolute top-6 right-6 p-2" aria-label="Close menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M18 6L6 18M6 6l12 12" stroke-width="2"/>
        </svg>
      </button>
      
      <nav class="mt-20">
        <ul class="space-y-6">
          <li><a href="#" class="text-xl font-semibold">Link 1</a></li>
          <li><a href="#" class="text-xl font-semibold">Link 2</a></li>
          <li><a href="#" class="text-xl font-semibold">Link 3</a></li>
          <li><a href="#" class="text-xl font-semibold">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>
```

---

## Breadcrumb Navigation

```html
<nav aria-label="Breadcrumb" class="py-4">
  <ol class="flex flex-wrap items-center text-sm">
    <li>
      <a href="#" class="hover:underline">Home</a>
    </li>
    <li class="mx-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </li>
    <li>
      <a href="#" class="hover:underline">Parent Page</a>
    </li>
    <li class="mx-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </li>
    <li aria-current="page">Current Page</li>
  </ol>
</nav>
```

---

## Footer Menu

```html
<nav>
  <ul class="space-y-3">
    <li><a href="#" class="underline transition-opacity hover:opacity-70">Link 1</a></li>
    <li><a href="#" class="underline transition-opacity hover:opacity-70">Link 2</a></li>
    <li><a href="#" class="underline transition-opacity hover:opacity-70">Link 3</a></li>
    <li><a href="#" class="underline transition-opacity hover:opacity-70">Link 4</a></li>
  </ul>
</nav>
```
