# ACF Intro Sections

## 1. Two-Column Image + Text (ACF)

**Dependencies:** ACF Pro

```php
<?php
$intro_image = get_field('intro_image');
$intro_heading = get_field('intro_heading');
$intro_content = get_field('intro_content');
?>

<?php if ($intro_image || $intro_heading || $intro_content) : ?>
<section class="bg-cream py-20 md:py-32">
  <div class="grid-main">
    <?php if ($intro_image) : ?>
    <div class="col-span-full md:col-start-1 md:col-end-6 mb-8 md:mb-0">
      <?php echo wp_get_attachment_image($intro_image['ID'], 'full', false, [
        'class' => 'w-full h-auto rounded-[10px]',
        'loading' => 'lazy'
      ]); ?>
    </div>
    <?php endif; ?>
    
    <?php if ($intro_heading || $intro_content) : ?>
    <div class="col-span-full md:col-start-7 md:col-end-13 flex flex-col justify-center">
      <?php if ($intro_heading) : ?>
      <h2 class="heading2 text-blk mb-6"><?php echo esc_html($intro_heading); ?></h2>
      <?php endif; ?>
      <?php if ($intro_content) : ?>
      <div class="prose text-blk">
        <?php echo wp_kses_post($intro_content); ?>
      </div>
      <?php endif; ?>
    </div>
    <?php endif; ?>
  </div>
</section>
<?php endif; ?>
```

---

## 2. Centered Text Block (ACF)

**Dependencies:** ACF Pro

```php
<?php
$intro = get_field('intro');
$description = get_field('description');
?>

<?php if ($intro || $description) : ?>
<section class="bg-white py-20 md:py-32">
  <div class="grid-main">
    <div class="col-span-full md:col-span-8 md:col-start-3 text-center">
      <?php if ($intro) : ?>
      <p class="text-xl md:text-2xl text-blk leading-relaxed"><?php echo esc_html($intro); ?></p>
      <?php endif; ?>
      <?php if ($description) : ?>
      <div class="prose text-blk-light mt-8">
        <?php echo wp_kses_post($description); ?>
      </div>
      <?php endif; ?>
    </div>
  </div>
</section>
<?php endif; ?>
```

---

## 3. Intro with Logos Grid (ACF)

**Dependencies:** ACF Pro

```php
<?php
$intro = get_field('intro');
$iso_logos = get_field('iso_logos'); // Repeater field
?>

<?php if ($intro || $iso_logos) : ?>
<section class="bg-cream py-20 md:py-32">
  <div class="grid-main">
    <?php if ($intro) : ?>
    <div class="col-span-full md:col-span-6 mb-12">
      <p class="text-xl md:text-2xl text-blk leading-relaxed"><?php echo esc_html($intro); ?></p>
    </div>
    <?php endif; ?>
    
    <?php if ($iso_logos) : ?>
    <div class="col-span-full md:col-start-7 md:col-end-13">
      <div class="flex flex-wrap items-center gap-8">
        <?php foreach ($iso_logos as $logo) : ?>
        <?php if ($logo['logo']) : ?>
        <img src="<?php echo esc_url($logo['logo']['url']); ?>" 
             alt="<?php echo esc_attr($logo['logo']['alt']); ?>" 
             class="h-12 w-auto opacity-70" />
        <?php endif; ?>
        <?php endforeach; ?>
      </div>
    </div>
    <?php endif; ?>
  </div>
</section>
<?php endif; ?>
```

---

## 4. Full-Width Background with Centered Content (ACF)

**Dependencies:** ACF Pro

```php
<?php
$section_heading = get_field('section_heading');
$section_description = get_field('section_description');
$background_color = get_field('background_color') ?: 'bg-dark';
?>

<?php if ($section_heading || $section_description) : ?>
<section class="<?php echo esc_attr($background_color); ?> py-24 md:py-40">
  <div class="grid-main">
    <div class="col-span-full md:col-span-8 md:col-start-3 text-center">
      <?php if ($section_heading) : ?>
      <h2 class="heading2 text-white mb-6"><?php echo esc_html($section_heading); ?></h2>
      <?php endif; ?>
      <?php if ($section_description) : ?>
      <p class="copy text-white/80 max-w-2xl mx-auto"><?php echo esc_html($section_description); ?></p>
      <?php endif; ?>
    </div>
  </div>
</section>
<?php endif; ?>
```

---

## 5. Split Intro with Contact Details (ACF)

**Dependencies:** ACF Pro

```php
<?php
$large_intro = get_field('large_intro');
$intro = get_field('intro');
$phone = get_field('contact_phone', 'option');
$email = get_field('contact_email', 'option');
$address = get_field('contact_address', 'option');
?>

<?php if ($large_intro || $intro || $phone || $email || $address) : ?>
<section class="bg-white py-16 md:py-24">
  <div class="grid-main">
    <?php if ($phone || $email || $address) : ?>
    <div class="col-span-full lg:col-span-3 mb-8 lg:mb-0">
      <div class="space-y-4">
        <?php if ($phone) : ?>
        <div>
          <p class="text-sm font-semibold text-blk-light uppercase tracking-wide">Phone</p>
          <a href="tel:<?php echo esc_attr($phone); ?>" class="text-blk hover:underline"><?php echo esc_html($phone); ?></a>
        </div>
        <?php endif; ?>
        
        <?php if ($email) : ?>
        <div>
          <p class="text-sm font-semibold text-blk-light uppercase tracking-wide">Email</p>
          <a href="mailto:<?php echo esc_attr($email); ?>" class="text-blk hover:underline"><?php echo esc_html($email); ?></a>
        </div>
        <?php endif; ?>
        
        <?php if ($address) : ?>
        <div>
          <p class="text-sm font-semibold text-blk-light uppercase tracking-wide">Address</p>
          <address class="text-blk not-italic"><?php echo wp_kses_post($address); ?></address>
        </div>
        <?php endif; ?>
      </div>
    </div>
    <?php endif; ?>
    
    <?php if ($large_intro || $intro) : ?>
    <div class="col-span-full lg:col-span-8 lg:col-start-5">
      <?php if ($large_intro) : ?>
      <p class="text-2xl md:text-3xl text-blk leading-relaxed mb-8"><?php echo esc_html($large_intro); ?></p>
      <?php endif; ?>
      <?php if ($intro) : ?>
      <div class="prose text-blk-light">
        <?php echo wp_kses_post($intro); ?>
      </div>
      <?php endif; ?>
    </div>
    <?php endif; ?>
  </div>
</section>
<?php endif; ?>
```
