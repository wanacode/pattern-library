# Accordions

## Staff Bio Accordion

```html
<div class="accordion">
  <button class="accordion-button w-full text-left py-4 border-b group">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=100&fit=crop" alt="" class="w-12 h-12 rounded-full object-cover" />
        <div>
          <h3 class="font-bold text-lg">Member Name</h3>
          <p class="text-sm">Job Title</p>
        </div>
      </div>
      <span class="text-2xl transition-transform group-[.active]:rotate-45">+</span>
    </div>
  </button>
  <div class="accordion-content overflow-hidden max-h-0 transition-[max-height] duration-500">
    <div class="py-6 prose">
      <p>Biography content goes here</p>
    </div>
  </div>
</div>
```

---

## FAQ Accordion

```html
<div class="accordion">
  <button class="accordion-button w-full text-left py-6 border-b group">
    <div class="flex items-center justify-between">
      <h3 class="font-bold text-lg pr-8">Question text goes here?</h3>
      <span class="text-2xl transition-transform group-[.active]:rotate-45 flex-shrink-0">+</span>
    </div>
  </button>
  <div class="accordion-content overflow-hidden max-h-0 transition-[max-height] duration-500">
    <div class="py-6 prose">
      <p>Answer content goes here</p>
    </div>
  </div>
</div>
```

---

## Simple Accordion List

```html
<div class="space-y-0">
  <div class="accordion border-b">
    <button class="accordion-button w-full text-left py-4 flex items-center justify-between group">
      <span class="font-bold">Accordion Item 1</span>
      <span class="text-2xl transition-transform group-[.active]:rotate-45">+</span>
    </button>
    <div class="accordion-content overflow-hidden max-h-0 transition-[max-height] duration-500">
      <p class="pb-4">Content for item 1</p>
    </div>
  </div>
  
  <div class="accordion border-b">
    <button class="accordion-button w-full text-left py-4 flex items-center justify-between group">
      <span class="font-bold">Accordion Item 2</span>
      <span class="text-2xl transition-transform group-[.active]:rotate-45">+</span>
    </button>
    <div class="accordion-content overflow-hidden max-h-0 transition-[max-height] duration-500">
      <p class="pb-4">Content for item 2</p>
    </div>
  </div>
</div>
```
