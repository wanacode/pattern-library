# Content Grids

## Services Three Column Grid

```html
<section class="py-20 md:py-32">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 px-6 xl:px-20">
    <article class="border-t py-6">
      <h3 class="text-2xl font-bold">Service Title</h3>
      <p class="mt-4">Service description</p>
      <a href="#" class="inline-flex items-center font-semibold mt-4 group">
        Learn more
        <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </a>
    </article>
  </div>
</section>
```

---

## Values Grid with Icons

```html
<section class="py-20 md:py-32">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 px-6 xl:px-20">
    <div class="py-6">
      <div class="w-16 h-16 mb-6">
        <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <h3 class="text-xl font-bold">Value Title</h3>
      <p class="mt-2">Value description</p>
    </div>
  </div>
</section>
```

---

## Team Grid with Hover

```html
<section class="py-20 md:py-32">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 xl:px-20">
    <article class="group">
      <div class="aspect-[3/4] overflow-hidden rounded-lg mb-4">
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=640&fit=crop"
             alt="Team member"
             class="w-full h-full object-cover transition duration-300 group-hover:scale-[1.02]" />
      </div>
      <h3 class="font-bold">Member Name</h3>
      <p class="text-sm">Job Title</p>
    </article>
  </div>
</section>
```

---

## Case Studies Grid Four Column

```html
<section class="py-20 md:py-32">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 px-6 xl:px-20">
    <article class="group duration-300 hover:opacity-70">
      <a href="#" class="block">
        <div class="overflow-hidden aspect-square rounded-lg">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=640&fit=crop"
               srcset="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=640&fit=crop 640w"
               sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
               alt="Case study"
               class="w-full h-full object-cover transition duration-300 group-hover:scale-[1.02]"
               loading="lazy" />
        </div>
        <h3 class="font-bold mt-4">Case Study Title</h3>
        <p class="text-sm mt-1">Category</p>
      </a>
    </article>
  </div>
</section>
```

---

## Logo Grid Responsive

```html
<section class="py-16 md:py-24">
  <div class="px-6 xl:px-20">
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-8">
      <img src="https://placehold.co/120x48?text=Logo" alt="Client" class="h-12 w-auto mx-auto opacity-60" />
      <img src="https://placehold.co/120x48?text=Logo" alt="Client" class="h-12 w-auto mx-auto opacity-60" />
      <img src="https://placehold.co/120x48?text=Logo" alt="Client" class="h-12 w-auto mx-auto opacity-60" />
      <img src="https://placehold.co/120x48?text=Logo" alt="Client" class="h-12 w-auto mx-auto opacity-60" />
      <img src="https://placehold.co/120x48?text=Logo" alt="Client" class="h-12 w-auto mx-auto opacity-60" />
      <img src="https://placehold.co/120x48?text=Logo" alt="Client" class="h-12 w-auto mx-auto opacity-60" />
    </div>
  </div>
</section>
```
