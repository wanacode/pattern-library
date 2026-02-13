# Form Inputs

## Floating Label Input

```html
<div class="relative">
  <input type="text" 
         id="field-id"
         name="field-name"
         placeholder=" "
         class="peer block w-full px-4 py-3 border-0 placeholder-transparent focus:ring-0 focus:outline-none"
         required />
  <label for="field-id"
         class="absolute left-4 top-3 transition-all duration-200
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                peer-focus:top-1 peer-focus:text-xs
                peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
    Label Text
  </label>
</div>
```

---

## Floating Label Textarea

```html
<div class="relative">
  <textarea id="field-id"
            name="field-name"
            placeholder=" "
            rows="4"
            class="peer block w-full px-4 py-3 border-0 placeholder-transparent focus:ring-0 focus:outline-none resize-none"
            required></textarea>
  <label for="field-id"
         class="absolute left-4 top-3 transition-all duration-200
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                peer-focus:top-1 peer-focus:text-xs
                peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
    Label Text
  </label>
</div>
```

---

## Select Dropdown

```html
<div class="relative">
  <select id="field-id"
          name="field-name"
          class="block w-full px-4 py-3 border-0 focus:ring-0 focus:outline-none appearance-none cursor-pointer">
    <option value="">Select an option</option>
    <option value="value-1">Option 1</option>
    <option value="value-2">Option 2</option>
    <option value="value-3">Option 3</option>
  </select>
  <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
  </svg>
</div>
```

---

## Checkbox

```html
<label class="flex items-start cursor-pointer group">
  <input type="checkbox" 
         name="field-name"
         class="peer sr-only" />
  <span class="w-5 h-5 border-2 flex items-center justify-center mr-3 mt-0.5 transition-colors">
    <svg class="w-3 h-3 opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
    </svg>
  </span>
  <span class="text-sm">Checkbox label text</span>
</label>
```

---

## Radio Button

```html
<label class="flex items-center cursor-pointer group">
  <input type="radio" 
         name="field-name"
         value="option-value"
         class="peer sr-only" />
  <span class="w-5 h-5 border-2 rounded-full flex items-center justify-center mr-3 transition-colors">
    <span class="w-2.5 h-2.5 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></span>
  </span>
  <span>Radio option text</span>
</label>
```

---

## Contact Form Layout

```html
<form class="space-y-6">
  <div class="relative">
    <input type="text" 
           id="name"
           name="name"
           placeholder=" "
           class="peer block w-full px-4 py-3 border-0 placeholder-transparent focus:ring-0 focus:outline-none"
           required />
    <label for="name"
           class="absolute left-4 top-3 transition-all duration-200
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                  peer-focus:top-1 peer-focus:text-xs
                  peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
      Full Name
    </label>
  </div>
  
  <div class="relative">
    <input type="email" 
           id="email"
           name="email"
           placeholder=" "
           class="peer block w-full px-4 py-3 border-0 placeholder-transparent focus:ring-0 focus:outline-none"
           required />
    <label for="email"
           class="absolute left-4 top-3 transition-all duration-200
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                  peer-focus:top-1 peer-focus:text-xs
                  peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
      Email Address
    </label>
  </div>
  
  <div class="relative">
    <textarea id="message"
              name="message"
              placeholder=" "
              rows="4"
              class="peer block w-full px-4 py-3 border-0 placeholder-transparent focus:ring-0 focus:outline-none resize-none"
              required></textarea>
    <label for="message"
           class="absolute left-4 top-3 transition-all duration-200
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                  peer-focus:top-1 peer-focus:text-xs
                  peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
      Your Message
    </label>
  </div>
  
  <button type="submit" class="inline-block rounded-full border-2 px-8 py-3 font-semibold transition-colors">
    Send Message
  </button>
</form>
```
