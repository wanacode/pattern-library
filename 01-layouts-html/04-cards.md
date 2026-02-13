# Cards

## Case Study Card with Hover Effect

```html
<article class="group duration-300 hover:opacity-70">
  <a href="#" class="block">
    <div class="overflow-hidden aspect-square rounded-lg">
      <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=640&fit=crop"
           srcset="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=640&fit=crop 640w"
           sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
           alt="Case study"
           class="w-full h-full object-cover transition duration-300 group-hover:scale-[1.02]"
           loading="lazy" />
    </div>
    <h3 class="font-bold mt-4">Case Study Title</h3>
    <p class="text-sm mt-1">Category</p>
  </a>
</article>
```

---

## Testimonial Block with Attribution

```html
<section>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 xl:px-20 py-20 md:py-32">
    <div class="md:col-span-3 mb-8 md:mb-0">
      <p class="font-bold">Person Name</p>
      <p class="text-sm">Organisation</p>
      <img src="https://placehold.co/120x48?text=Logo" alt="Company" class="h-8 w-auto mt-4 opacity-70" />
    </div>
    <div class="md:col-span-9 md:col-start-4">
      <blockquote class="text-lg md:text-xl">
        Testimonial quote text
      </blockquote>
    </div>
  </div>
</section>
```

---

## Service Category Card

```html
<article class="group duration-300 hover:opacity-70">
  <a href="#" class="block">
    <div class="overflow-hidden aspect-[4/3] rounded-lg">
      <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=640&fit=crop"
           alt="Service"
           class="w-full h-full object-cover transition duration-300 group-hover:scale-[1.02]"
           loading="lazy" />
    </div>
    <h3 class="font-bold mt-4 text-lg">Service Name</h3>
    <p class="text-sm mt-1 line-clamp-2">Service description</p>
  </a>
</article>
```

---

## Blog Post Card

```html
<article class="flex flex-col group">
  <a href="#" class="block">
    <div class="overflow-hidden aspect-[16/10] rounded-lg mb-4">
      <img src="https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?w=640&fit=crop"
           alt="Post"
           class="w-full h-full object-cover transition duration-300 group-hover:scale-[1.02]"
           loading="lazy" />
    </div>
    <time class="text-sm">Date</time>
    <h3 class="font-bold mt-1 text-lg group-hover:underline">Post Title</h3>
    <p class="text-sm mt-2 line-clamp-3">Excerpt</p>
  </a>
</article>
```

---

## Stat Metric Card

```html
<div class="text-center py-8">
  <p class="text-5xl md:text-6xl font-bold">100</p>
  <p class="mt-2">Label</p>
</div>
```
