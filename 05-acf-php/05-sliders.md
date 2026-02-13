# ACF Sliders

## 1. Logo Carousel with ACF Repeater

**Dependencies:** ACF Pro, Splide.js

```php
<?php
$client_logos = get_field('client_logos'); // Repeater field
?>

<?php if ($client_logos) : ?>
<section class="bg-white py-16">
  <div id="logo-slider" class="splide">
    <div class="splide__track">
      <ul class="splide__list">
        <?php foreach ($client_logos as $logo) : ?>
        <?php if ($logo['logo']) : ?>
        <li class="splide__slide flex items-center justify-center px-8">
          <img src="<?php echo esc_url($logo['logo']['url']); ?>" 
               alt="<?php echo esc_attr($logo['logo']['alt']); ?>"
               class="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity" />
        </li>
        <?php endif; ?>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  new Splide('#logo-slider', {
    type: 'loop',
    perPage: 5,
    gap: '2rem',
    arrows: false,
    pagination: false,
    autoplay: true,
    interval: 3000,
    breakpoints: {
      640: { destroy: true },
      768: { perPage: 2 },
      1024: { perPage: 3 },
      1280: { perPage: 4 },
      1536: { perPage: 5 }
    }
  }).mount();
});
</script>

<!-- Mobile Grid Fallback -->
<div class="md:hidden grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-x-8 gap-y-8 px-6">
  <?php foreach ($client_logos as $logo) : ?>
  <?php if ($logo['logo']) : ?>
  <img src="<?php echo esc_url($logo['logo']['url']); ?>" 
       alt="<?php echo esc_attr($logo['logo']['alt']); ?>"
       class="h-10 w-auto mx-auto opacity-60" />
  <?php endif; ?>
  <?php endforeach; ?>
</div>
<?php endif; ?>
```

---

## 2. Image Gallery with ACF Gallery Field

**Dependencies:** ACF Pro, Splide.js

```php
<?php
$gallery = get_field('image_gallery'); // Gallery field
?>

<?php if ($gallery) : ?>
<section class="bg-cream py-16">
  <div class="px-6 xl:px-20">
    <div id="gallery-slider" class="splide">
      <div class="splide__track">
        <ul class="splide__list">
          <?php foreach ($gallery as $image) : ?>
          <li class="splide__slide">
            <img src="<?php echo esc_url($image['sizes']['full_1200']); ?>" 
                 alt="<?php echo esc_attr($image['alt']); ?>"
                 class="w-full h-auto rounded-[10px]" />
          </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  new Splide('#gallery-slider', {
    type: 'loop',
    perPage: 1,
    arrows: false,
    pagination: true,
    gap: '1rem'
  }).mount();
});
</script>
<?php endif; ?>
```

---

## 3. Testimonial Slider with ACF Repeater

**Dependencies:** ACF Pro, Splide.js

```php
<?php
$testimonials = get_field('testimonials'); // Repeater field
?>

<?php if ($testimonials && count($testimonials) > 1) : ?>
<section class="bg-cream-dark py-20">
  <div id="testimonial-slider" class="splide">
    <div class="splide__track">
      <ul class="splide__list">
        <?php foreach ($testimonials as $testimonial) : ?>
        <li class="splide__slide">
          <div class="grid-main">
            <!-- Attribution -->
            <div class="col-span-full md:col-span-3 mb-8 md:mb-0">
              <?php if ($testimonial['name']) : ?>
              <p class="font-semibold text-blk"><?php echo esc_html($testimonial['name']); ?></p>
              <?php endif; ?>
              
              <?php if ($testimonial['organisation']) : ?>
              <p class="text-blk-light text-sm"><?php echo esc_html($testimonial['organisation']); ?></p>
              <?php endif; ?>
            </div>
            
            <!-- Quote -->
            <?php if ($testimonial['quote']) : ?>
            <div class="col-span-full md:col-span-9 md:col-start-4">
              <blockquote class="text-xl md:text-2xl text-blk">
                <?php echo esc_html($testimonial['quote']); ?>
              </blockquote>
            </div>
            <?php endif; ?>
          </div>
        </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  new Splide('#testimonial-slider', {
    type: 'loop',
    perPage: 1,
    arrows: true,
    pagination: false,
    autoplay: true,
    interval: 6000,
    speed: 800
  }).mount();
});
</script>
<?php endif; ?>
```

---

## 4. Case Study Gallery with Thumbnails

**Dependencies:** ACF Pro, Splide.js

```php
<?php
$gallery = get_field('case_study_gallery'); // Gallery field
?>

<?php if ($gallery) : ?>
<section class="bg-cream py-16">
  <div class="px-6 xl:px-20">
    <!-- Main Slider -->
    <div id="main-slider" class="splide mb-4">
      <div class="splide__track">
        <ul class="splide__list">
          <?php foreach ($gallery as $image) : ?>
          <li class="splide__slide">
            <img src="<?php echo esc_url($image['sizes']['full_1200']); ?>" 
                 alt="<?php echo esc_attr($image['alt']); ?>"
                 class="w-full h-auto rounded-[10px]" />
          </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
    
    <!-- Thumbnail Slider -->
    <div id="thumbnail-slider" class="splide">
      <div class="splide__track">
        <ul class="splide__list">
          <?php foreach ($gallery as $image) : ?>
          <li class="splide__slide">
            <img src="<?php echo esc_url($image['sizes']['full_320']); ?>" 
                 alt="<?php echo esc_attr($image['alt']); ?>"
                 class="w-full h-auto rounded cursor-pointer opacity-60 hover:opacity-100 transition-opacity" />
          </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var main = new Splide('#main-slider', {
    type: 'fade',
    pagination: false,
    arrows: false,
  });
  
  var thumbnails = new Splide('#thumbnail-slider', {
    gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
  });
  
  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});
</script>
<?php endif; ?>
```

---

## 5. Hero Image Slider

**Dependencies:** ACF Pro, Splide.js

```php
<?php
$hero_slides = get_field('hero_slides'); // Repeater with image and content
?>

<?php if ($hero_slides) : ?>
<section class="hero-slider">
  <div id="hero-slider" class="splide h-[80vh] min-h-[500px]">
    <div class="splide__track h-full">
      <ul class="splide__list h-full">
        <?php foreach ($hero_slides as $slide) : ?>
        <li class="splide__slide relative h-full">
          <?php if ($slide['image']) : ?>
          <img src="<?php echo esc_url($slide['image']['sizes']['full_1920']); ?>" 
               alt="<?php echo esc_attr($slide['image']['alt']); ?>"
               class="absolute inset-0 w-full h-full object-cover" />
          <?php endif; ?>
          
          <!-- Content Overlay -->
          <div class="absolute inset-0 bg-black/40 flex items-end">
            <div class="grid-main w-full pb-16">
              <div class="col-span-full md:col-span-8">
                <?php if ($slide['pre_heading']) : ?>
                <span class="preheading1 text-white block mb-4"><?php echo esc_html($slide['pre_heading']); ?></span>
                <?php endif; ?>
                <?php if ($slide['heading']) : ?>
                <h2 class="heading1 text-white"><?php echo esc_html($slide['heading']); ?></h2>
                <?php endif; ?>
                <?php if ($slide['button_text'] && $slide['button_url']) : ?>
                <a href="<?php echo esc_url($slide['button_url']); ?>" class="button mt-6 inline-block">
                  <?php echo esc_html($slide['button_text']); ?>
                </a>
                <?php endif; ?>
              </div>
            </div>
          </div>
        </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  new Splide('#hero-slider', {
    type: 'loop',
    perPage: 1,
    arrows: true,
    pagination: true,
    autoplay: true,
    interval: 5000,
    speed: 1000,
  }).mount();
});
</script>
<?php endif; ?>
```
