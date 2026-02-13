# ACF Testimonials

## 1. Single Testimonial Block (ACF)

**Dependencies:** ACF Pro

```php
<?php
$testimonial_quote = get_field('testimonial_quote');
$testimonial_name = get_field('testimonial_name');
$testimonial_organisation = get_field('testimonial_organisation');
$testimonial_logo = get_field('testimonial_logo');
?>

<?php if ($testimonial_quote) : ?>
<section class="bg-cream-dark">
  <div class="grid-main py-20 md:py-32">
    <!-- Attribution -->
    <?php if ($testimonial_name || $testimonial_organisation || $testimonial_logo) : ?>
    <div class="col-span-full md:col-span-3 mb-8 md:mb-0">
      <?php if ($testimonial_name) : ?>
      <p class="font-semibold text-blk"><?php echo esc_html($testimonial_name); ?></p>
      <?php endif; ?>
      
      <?php if ($testimonial_organisation) : ?>
      <p class="text-blk-light text-sm"><?php echo esc_html($testimonial_organisation); ?></p>
      <?php endif; ?>
      
      <?php if ($testimonial_logo) : ?>
      <img src="<?php echo esc_url($testimonial_logo['url']); ?>" 
           alt="<?php echo esc_attr($testimonial_logo['alt']); ?>" 
           class="h-8 w-auto mt-4 opacity-70" />
      <?php endif; ?>
    </div>
    <?php endif; ?>
    
    <!-- Quote -->
    <div class="col-span-full md:col-span-9 md:col-start-4">
      <blockquote class="text-[18px]/[25px] md:text-[21px]/[28px] 2xl:text-3xl/[41px] text-blk text-pretty">
        <?php echo esc_html($testimonial_quote); ?>
      </blockquote>
    </div>
  </div>
</section>
<?php endif; ?>
```

---

## 2. Testimonials Repeater (ACF)

**Dependencies:** ACF Pro

```php
<?php
$testimonials = get_field('testimonials'); // Repeater field
?>

<?php if ($testimonials) : ?>
<section class="bg-cream-dark">
  <?php foreach ($testimonials as $index => $testimonial) : ?>
  <div class="grid-main py-20 md:py-32 <?php echo $index > 0 ? 'border-t border-gris' : ''; ?>">
    <!-- Attribution -->
    <?php if ($testimonial['name'] || $testimonial['organisation'] || $testimonial['logo']) : ?>
    <div class="col-span-full md:col-span-3 mb-8 md:mb-0">
      <?php if ($testimonial['name']) : ?>
      <p class="font-semibold text-blk"><?php echo esc_html($testimonial['name']); ?></p>
      <?php endif; ?>
      
      <?php if ($testimonial['organisation']) : ?>
      <p class="text-blk-light text-sm"><?php echo esc_html($testimonial['organisation']); ?></p>
      <?php endif; ?>
      
      <?php if ($testimonial['logo']) : ?>
      <img src="<?php echo esc_url($testimonial['logo']['url']); ?>" 
           alt="<?php echo esc_attr($testimonial['logo']['alt']); ?>" 
           class="h-8 w-auto mt-4 opacity-70" />
      <?php endif; ?>
    </div>
    <?php endif; ?>
    
    <!-- Quote -->
    <?php if ($testimonial['quote']) : ?>
    <div class="col-span-full md:col-span-9 md:col-start-4">
      <blockquote class="text-[18px]/[25px] md:text-[21px]/[28px] 2xl:text-3xl/[41px] text-blk text-pretty">
        <?php echo esc_html($testimonial['quote']); ?>
      </blockquote>
    </div>
    <?php endif; ?>
  </div>
  <?php endforeach; ?>
</section>
<?php endif; ?>
```

---

## 3. Testimonial Slider with Splide (ACF)

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
            <?php if ($testimonial['name'] || $testimonial['organisation']) : ?>
            <div class="col-span-full md:col-span-3 mb-8 md:mb-0">
              <?php if ($testimonial['name']) : ?>
              <p class="font-semibold text-blk"><?php echo esc_html($testimonial['name']); ?></p>
              <?php endif; ?>
              
              <?php if ($testimonial['organisation']) : ?>
              <p class="text-blk-light text-sm"><?php echo esc_html($testimonial['organisation']); ?></p>
              <?php endif; ?>
              
              <?php if ($testimonial['logo']) : ?>
              <img src="<?php echo esc_url($testimonial['logo']['url']); ?>" 
                   alt="<?php echo esc_attr($testimonial['logo']['alt']); ?>" 
                   class="h-8 w-auto mt-4 opacity-70" />
              <?php endif; ?>
            </div>
            <?php endif; ?>
            
            <!-- Quote -->
            <?php if ($testimonial['quote']) : ?>
            <div class="col-span-full md:col-span-9 md:col-start-4">
              <blockquote class="text-[18px]/[25px] md:text-[21px]/[28px] 2xl:text-3xl/[41px] text-blk text-pretty">
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
<?php elseif ($testimonials) : ?>
<!-- Single testimonial without slider -->
<?php 
$testimonial = $testimonials[0];
get_template_part('template-parts/testimonial');
?>
<?php endif; ?>
```

---

## 4. Testimonial Card (ACF)

**Dependencies:** ACF Pro

```php
<?php
$quote = get_field('testimonial_quote');
$name = get_field('testimonial_name');
$role = get_field('testimonial_role');
$photo = get_field('testimonial_photo');
?>

<?php if ($quote) : ?>
<article class="bg-white p-8 rounded-[10px] shadow-sm">
  <!-- Quote Icon -->
  <svg class="w-10 h-10 text-gris mb-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
  </svg>
  
  <!-- Quote Text -->
  <blockquote class="text-blk text-lg mb-6">
    <?php echo esc_html($quote); ?>
  </blockquote>
  
  <!-- Author -->
  <div class="flex items-center">
    <?php if ($photo) : ?>
    <img src="<?php echo esc_url($photo['sizes']['thumbnail']); ?>" 
         alt="<?php echo esc_attr($name); ?>" 
         class="w-12 h-12 rounded-full object-cover mr-4" />
    <?php endif; ?>
    <div>
      <?php if ($name) : ?>
      <p class="font-semibold text-blk"><?php echo esc_html($name); ?></p>
      <?php endif; ?>
      <?php if ($role) : ?>
      <p class="text-blk-light text-sm"><?php echo esc_html($role); ?></p>
      <?php endif; ?>
    </div>
  </div>
</article>
<?php endif; ?>
```
