# ACF Heroes

## 1. Full-Viewport Hero with ACF

**Dependencies:** ACF Pro

```php
<?php
$hero = get_field('hero_image');
$hero_mobile = get_field('hero_image_mobile');
$pre_heading = get_field('pre_heading');
$heading = get_field('heading');
?>

<?php if ($hero) : ?>
<div class="hero grid grid-cols-1 grid-rows-1 max-h-[100svh] min-h-[420px]">
  <div class="col-start-1 row-start-1">
    <picture>
      <?php if ($hero_mobile) : ?>
      <source media="(max-width: 828px)" srcset="<?php echo $hero_mobile['sizes']['full_640']; ?> 640w, <?php echo $hero_mobile['sizes']['full_750']; ?> 750w, <?php echo $hero_mobile['sizes']['full_828']; ?> 828w, <?php echo $hero_mobile['sizes']['full_1080']; ?> 1080w" sizes="1080px" />
      <?php endif; ?>
      <img id="hero-image"
           src="<?php echo $hero['sizes']['full_2560']; ?>"
           srcset="<?php echo $hero['sizes']['full_640']; ?> 640w, <?php echo $hero['sizes']['full_750']; ?> 750w, <?php echo $hero['sizes']['full_828']; ?> 828w, <?php echo $hero['sizes']['full_1080']; ?> 1080w, <?php echo $hero['sizes']['full_1200']; ?> 1200w, <?php echo $hero['sizes']['full_1440']; ?> 1440w, <?php echo $hero['sizes']['full_1920']; ?> 1920w, <?php echo $hero['sizes']['full_2048']; ?> 2048w, <?php echo $hero['sizes']['full_2560']; ?> 2560w"
           sizes="100vw"
           alt="<?php echo esc_attr($hero['alt']); ?>"
           class="object-cover w-full h-full opacity-0 fadein"
           width="<?php echo $hero['width']; ?>"
           height="<?php echo $hero['height']; ?>"
           loading="eager" />
    </picture>
  </div>
  
  <?php if ($pre_heading || $heading) : ?>
  <div class="z-10 col-start-1 row-start-1 flex items-end pb-16">
    <div class="grid-main">
      <div class="col-span-full md:col-span-8">
        <?php if ($pre_heading) : ?>
        <span class="preheading1 text-white block mb-4"><?php echo esc_html($pre_heading); ?></span>
        <?php endif; ?>
        <?php if ($heading) : ?>
        <h1 class="heading1 text-white"><?php echo esc_html($heading); ?></h1>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <?php endif; ?>
</div>
<?php endif; ?>
```

---

## 2. Hero with SVG Overlay (ACF)

**Dependencies:** ACF Pro

```php
<?php
$hero = get_field('hero_image');
$hero_mobile = get_field('hero_image_mobile');
?>

<?php if ($hero) : ?>
<div class="hero grid grid-cols-1 grid-rows-1 max-h-[100svh] min-h-[420px]">
  <div class="col-start-1 row-start-1">
    <picture>
      <?php if ($hero_mobile) : ?>
      <source media="(max-width: 828px)" srcset="<?php echo $hero_mobile['sizes']['full_640']; ?> 640w, <?php echo $hero_mobile['sizes']['full_750']; ?> 750w, <?php echo $hero_mobile['sizes']['full_828']; ?> 828w, <?php echo $hero_mobile['sizes']['full_1080']; ?> 1080w" sizes="1080px" />
      <?php endif; ?>
      <img id="hero-image"
           src="<?php echo $hero['sizes']['full_2560']; ?>"
           srcset="<?php echo $hero['sizes']['full_640']; ?> 640w, <?php echo $hero['sizes']['full_750']; ?> 750w, <?php echo $hero['sizes']['full_828']; ?> 828w, <?php echo $hero['sizes']['full_1080']; ?> 1080w, <?php echo $hero['sizes']['full_1200']; ?> 1200w, <?php echo $hero['sizes']['full_1440']; ?> 1440w, <?php echo $hero['sizes']['full_1920']; ?> 1920w, <?php echo $hero['sizes']['full_2048']; ?> 2048w, <?php echo $hero['sizes']['full_2560']; ?> 2560w"
           sizes="100vw"
           alt="<?php echo esc_attr($hero['alt']); ?>"
           class="object-cover w-full h-full opacity-0 fadein"
           loading="eager" />
    </picture>
  </div>
  
  <div class="z-10 col-start-1 row-start-1">
    <svg viewBox="0 0 1920 320" class="w-full" preserveAspectRatio="xMidYMax meet">
      <text x="50%" y="80%" text-anchor="middle" class="fill-white text-8xl font-semibold">
        <?php echo esc_html(get_field('svg_text')); ?>
      </text>
    </svg>
  </div>
</div>
<?php endif; ?>
```

---

## 3. Case Study Single Hero (ACF)

**Dependencies:** ACF Pro

```php
<?php
$hero = get_field('hero_image');
$hero_mobile = get_field('hero_image_mobile');
?>

<?php if ($hero) : ?>
<div class="hero grid grid-cols-1 grid-rows-1 max-h-[100svh] min-h-[420px]">
  <div class="col-start-1 row-start-1">
    <picture>
      <?php if ($hero_mobile) : ?>
      <source media="(max-width: 828px)" srcset="<?php echo $hero_mobile['sizes']['full_640']; ?> 640w, <?php echo $hero_mobile['sizes']['full_750']; ?> 750w, <?php echo $hero_mobile['sizes']['full_828']; ?> 828w, <?php echo $hero_mobile['sizes']['full_1080']; ?> 1080w" sizes="1080px" />
      <?php endif; ?>
      <img id="hero-image"
           src="<?php echo $hero['sizes']['full_2560']; ?>"
           srcset="<?php echo $hero['sizes']['full_640']; ?> 640w, <?php echo $hero['sizes']['full_750']; ?> 750w, <?php echo $hero['sizes']['full_828']; ?> 828w, <?php echo $hero['sizes']['full_1080']; ?> 1080w, <?php echo $hero['sizes']['full_1200']; ?> 1200w, <?php echo $hero['sizes']['full_1440']; ?> 1440w, <?php echo $hero['sizes']['full_1920']; ?> 1920w, <?php echo $hero['sizes']['full_2048']; ?> 2048w, <?php echo $hero['sizes']['full_2560']; ?> 2560w"
           sizes="100vw"
           alt="<?php echo esc_attr($hero['alt']); ?>"
           class="object-cover w-full h-full opacity-0 fadein"
           width="<?php echo $hero['width']; ?>"
           height="<?php echo $hero['height']; ?>"
           loading="eager" />
    </picture>
  </div>
  
  <div class="z-10 col-start-1 row-start-1 flex items-end pb-16">
    <div class="grid-main">
      <div class="col-span-full md:col-span-8">
        <?php
        $categories = get_the_category();
        if ($categories) : ?>
        <span class="preheading1 text-white block mb-4"><?php echo esc_html($categories[0]->name); ?></span>
        <?php endif; ?>
        <h1 class="heading1 text-white"><?php the_title(); ?></h1>
      </div>
    </div>
  </div>
</div>
<?php endif; ?>
```
