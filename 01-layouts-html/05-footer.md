# Footer

## Four Column Layout

```html
<footer>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 xl:px-20 py-16 md:py-24">
    <!-- Logo Column -->
    <div class="mb-8 md:mb-0">
      <a href="#">
        <img src="https://placehold.co/200x48?text=Logo" alt="Site name" class="h-12 w-auto" />
      </a>
    </div>
    
    <!-- Menu Column -->
    <div class="mb-8 md:mb-0">
      <nav>
        <ul class="space-y-3">
          <li><a href="#" class="underline transition-opacity hover:opacity-70">Link 1</a></li>
          <li><a href="#" class="underline transition-opacity hover:opacity-70">Link 2</a></li>
          <li><a href="#" class="underline transition-opacity hover:opacity-70">Link 3</a></li>
          <li><a href="#" class="underline transition-opacity hover:opacity-70">Link 4</a></li>
        </ul>
      </nav>
    </div>
    
    <!-- Contact Column -->
    <div class="mb-8 md:mb-0">
      <p class="text-sm font-bold uppercase tracking-wide mb-4">Contact</p>
      <address class="not-italic space-y-2">
        <p>Street address</p>
        <p>City state postcode</p>
        <p class="mt-4">
          <a href="tel:phone" class="hover:underline">Phone number</a>
        </p>
        <p>
          <a href="mailto:email" class="hover:underline">Email address</a>
        </p>
      </address>
    </div>
    
    <!-- Connect Column -->
    <div>
      <p class="text-sm font-bold uppercase tracking-wide mb-4">Connect</p>
      <div class="flex space-x-4">
        <a href="#" class="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="#" class="hover:opacity-70 transition-opacity" aria-label="Twitter">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
  
  <!-- Bottom Bar -->
  <div class="border-t">
    <div class="px-6 xl:px-20 py-6">
      <div class="flex flex-col md:flex-row justify-between items-center text-sm">
        <p>Copyright text</p>
        <a href="#" class="hover:underline mt-2 md:mt-0">Privacy Policy</a>
      </div>
    </div>
  </div>
</footer>
```
