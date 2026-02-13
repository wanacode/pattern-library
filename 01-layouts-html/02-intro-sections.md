# Intro Sections

## Two Column Image and Text

```html
<section class="py-20 md:py-32">
  <div class="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 xl:px-20">
    <div class="md:col-span-6 mb-8 md:mb-0">
      <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&fit=crop"
           srcset="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=640&fit=crop 640w, https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&fit=crop 1200w"
           sizes="(max-width: 768px) 100vw, 50vw"
           alt="Mountain lake"
           class="w-full h-auto rounded-lg"
           loading="lazy" />
    </div>
    <div class="md:col-span-6 flex flex-col justify-center">
      <h2 class="text-3xl font-bold mb-6">Section Heading</h2>
      <div class="prose">
        <p>Rich text content goes here</p>
      </div>
    </div>
  </div>
</section>
```

---

## Centered Text Block

```html
<section class="py-20 md:py-32">
  <div class="px-6 xl:px-20">
    <div class="md:col-span-8 md:col-start-3 text-center">
      <p class="text-xl md:text-2xl leading-relaxed">Intro text</p>
      <div class="mt-8">
        <p>Description text</p>
      </div>
    </div>
  </div>
</section>
```

---

## Intro with Logos Grid

```html
<section class="py-20 md:py-32">
  <div class="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 xl:px-20">
    <div class="md:col-span-6 mb-12">
      <p class="text-xl md:text-2xl leading-relaxed">Intro text</p>
    </div>
    <div class="md:col-span-6">
      <div class="flex flex-wrap items-center gap-8">
        <img src="https://placehold.co/120x48?text=Logo+1" alt="Company 1" class="h-12 w-auto opacity-70" />
        <img src="https://placehold.co/120x48?text=Logo+2" alt="Company 2" class="h-12 w-auto opacity-70" />
        <img src="https://placehold.co/120x48?text=Logo+3" alt="Company 3" class="h-12 w-auto opacity-70" />
      </div>
    </div>
  </div>
</section>
```

---

## Full Width Background with Centered Content

```html
<section class="py-24 md:py-40">
  <div class="px-6 xl:px-20">
    <div class="md:col-span-8 md:col-start-3 text-center">
      <h2 class="text-3xl font-bold mb-6">Section Heading</h2>
      <p class="max-w-2xl mx-auto">Description text</p>
    </div>
  </div>
</section>
```

---

## Split Intro with Contact Details

```html
<section class="py-16 md:py-24">
  <div class="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 xl:px-20">
    <div class="md:col-span-3 mb-8 md:mb-0">
      <div class="space-y-4">
        <div>
          <p class="text-sm font-semibold uppercase tracking-wide">Phone</p>
          <a href="tel:phone" class="hover:underline">Phone number</a>
        </div>
        <div>
          <p class="text-sm font-semibold uppercase tracking-wide">Email</p>
          <a href="mailto:email" class="hover:underline">Email address</a>
        </div>
        <div>
          <p class="text-sm font-semibold uppercase tracking-wide">Address</p>
          <address class="not-italic">Street address</address>
        </div>
      </div>
    </div>
    <div class="md:col-span-8 md:col-start-5">
      <p class="text-2xl md:text-3xl leading-relaxed mb-8">Large intro text</p>
      <div class="prose">
        <p>Secondary content</p>
      </div>
    </div>
  </div>
</section>
```
