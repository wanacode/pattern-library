# Sliders

## Logo Carousel with Splide

**Dependencies:** Splide.js v4.x, Splide CSS

```html
<div id="logo-slider" class="splide py-16">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide flex items-center justify-center px-8">
        <img src="https://placehold.co/120x48?text=Logo+1" alt="Client 1" class="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity" />
      </li>
      <li class="splide__slide flex items-center justify-center px-8">
        <img src="https://placehold.co/120x48?text=Logo+2" alt="Client 2" class="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity" />
      </li>
      <li class="splide__slide flex items-center justify-center px-8">
        <img src="https://placehold.co/120x48?text=Logo+3" alt="Client 3" class="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity" />
      </li>
    </ul>
  </div>
</div>
```

---

## Image Gallery Slider with Pagination

**Dependencies:** Splide.js v4.x, Splide CSS

```html
<div id="gallery-slider" class="splide">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&fit=crop" alt="Image 1" class="w-full h-auto" />
      </li>
      <li class="splide__slide">
        <img src="https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?w=1200&fit=crop" alt="Image 2" class="w-full h-auto" />
      </li>
      <li class="splide__slide">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&fit=crop" alt="Image 3" class="w-full h-auto" />
      </li>
    </ul>
  </div>
</div>
```

---

## Testimonial Slider

**Dependencies:** Splide.js v4.x, Splide CSS

```html
<div id="testimonial-slider" class="splide py-20">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 xl:px-20">
          <div class="md:col-span-3">
            <p class="font-bold">Name 1</p>
            <p class="text-sm">Organisation</p>
          </div>
          <div class="md:col-span-9">
            <blockquote class="text-xl md:text-2xl">Quote text</blockquote>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 xl:px-20">
          <div class="md:col-span-3">
            <p class="font-bold">Name 2</p>
            <p class="text-sm">Organisation</p>
          </div>
          <div class="md:col-span-9">
            <blockquote class="text-xl md:text-2xl">Quote text</blockquote>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
```
