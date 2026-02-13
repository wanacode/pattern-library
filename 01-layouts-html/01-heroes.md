# Heroes

## Full Viewport with Bottom Text

https://play.tailwindcss.com/ea7lbP5svB

```html
<div class="grid grid-cols-1 grid-rows-1 max-h-screen min-h-[420px]">
  <div class="col-start-1 row-start-1">
    <picture>
      <source media="(max-width: 828px)" srcset="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=640&fit=crop 640w, https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=828&fit=crop 828w" sizes="100vw" />
      <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&h=1080&fit=crop"
           srcset="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=640&fit=crop 640w, https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1080&fit=crop 1080w, https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&fit=crop 1920w"
           sizes="100vw"
           alt="Mountain landscape"
           class="object-cover w-full h-full"
           loading="eager" />
    </picture>
  </div>
  <div class="z-10 col-start-1 row-start-1 flex items-end pb-16">
    <div class="px-6 xl:px-20">
      <span class="text-lg text-white font-semibold block mb-4">Pre-heading</span>
      <h1 class="text-5xl text-white font-bold">Main Heading</h1>
    </div>
  </div>
</div>
```

---

## Split Layout Image Left Content Right

https://play.tailwindcss.com/b4HXxNFq75

```html
<section class="min-h-[80vh] flex items-center">
  <div class="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 xl:px-20 w-full py-20">
    <div class="md:col-span-6">
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&fit=crop"
           srcset="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=640&fit=crop 640w, https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&fit=crop 1200w"
           sizes="(max-width: 768px) 100vw, 50vw"
           alt="Ocean sunset"
           class="w-full h-auto rounded-lg"
           loading="lazy" />
    </div>
    <div class="md:col-span-5 md:col-start-8 flex flex-col justify-center">
      <span class="text-lg font-semibold mb-4">Pre-heading</span>
      <h1 class="text-5xl font-bold mb-6">Heading</h1>
      <p class="text-base">Description text goes here</p>
    </div>
  </div>
</section>
```

---

## Minimal Text Only

https://play.tailwindcss.com/0BoveaLKUa

```html
<section class="min-h-[60vh] flex items-end pb-20">
  <div class="px-6 xl:px-20 w-full">
    <div class="md:col-span-10">
      <h1 class="text-5xl font-bold">Page Title</h1>
    </div>
  </div>
</section>
```
