# ACF Case Studies

## 1. Case Study Cards Grid (ACF Query)

**Dependencies:** ACF Pro

```php
<?php
$case_studies = get_field('case_studies'); // Relationship field
?>

<?php if ($case_studies) : ?>
<section class="bg-cream py-20 md:py-32">
  <div class="grid gap-x-[18px] md:grid-cols-12 md:gap-x-[30px] px-6 xl:px-20">
    <?php foreach ($case_studies as $post) : 
      setup_postdata($post);
      $thumbnail = get_the_post_thumbnail_url($post->ID, 'full_640');
      $categories = get_the_category($post->ID);
    ?>
    <article class="col-span-full sm:col-span-1 md:col-span-4 2xl:col-span-3 last:md:hidden last:2xl:block relative group duration-300 hover:opacity-70">
      <a href="<?php echo esc_url(get_permalink($post->ID)); ?>" class="block before:absolute before:inset-0">
        <?php if ($thumbnail) : ?>
        <div class="overflow-hidden aspect-square rounded-[10px]">
          <img src="<?php echo esc_url($thumbnail); ?>"
               srcset="<?php echo esc_url(get_the_post_thumbnail_url($post->ID, 'full_640')); ?> 640w, <?php echo esc_url(get_the_post_thumbnail_url($post->ID, 'full_1080')); ?> 1080w"
               sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
               alt="<?php echo esc_attr(get_the_title($post->ID)); ?>"
               class="w-full h-full object-cover transition duration-300 ease-out group-hover:scale-[1.02]"
               loading="lazy" />
        </div>
        <?php endif; ?>
        <h3 class="font-semibold text-blk mt-4"><?php echo esc_html(get_the_title($post->ID)); ?></h3>
        <?php if ($categories) : ?>
        <p class="text-blk-light text-sm mt-1"><?php echo esc_html($categories[0]->name); ?></p>
        <?php endif; ?>
      </a>
    </article>
    <?php endforeach; ?>
  </div>
  <?php wp_reset_postdata(); ?>
</section>
<?php endif; ?>
```

---

## 2. Case Study Archive with Filter (ACF)

**Dependencies:** ACF Pro, animate-css-grid (optional)

```php
<?php
$intro = get_field('intro', 'option');
$categories = get_categories();
$case_studies = new WP_Query([
  'post_type' => 'case_study',
  'posts_per_page' => -1
]);
?>

<?php if ($case_studies->have_posts()) : ?>
<section class="bg-cream pt-16 md:pt-36 pb-24 md:pb-48">
  <div class="grid-main">
    <!-- Filter Sidebar -->
    <div class="col-span-full md:col-span-3 mb-8 md:mb-0">
      <p class="text-sm font-semibold text-blk-light uppercase tracking-wide mb-4">Services</p>
      <div class="space-y-2">
        <button class="category active-post block text-blk font-semibold underline text-left" data-category="all">All</button>
        <?php foreach ($categories as $cat) : ?>
        <button class="category block text-blk-light hover:text-blk transition-colors text-left" data-category="category-<?php echo $cat->term_id; ?>">
          <?php echo esc_html($cat->name); ?>
        </button>
        <?php endforeach; ?>
      </div>
    </div>
    
    <!-- Intro Text -->
    <?php if ($intro) : ?>
    <div class="col-span-full md:col-span-7 md:col-start-4 mb-12">
      <div class="prose prose-balance text-blk">
        <?php echo wp_kses_post($intro); ?>
      </div>
    </div>
    <?php endif; ?>
    
    <!-- Case Study Grid -->
    <div class="posts col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <?php while ($case_studies->have_posts()) : $case_studies->the_post(); 
        $post_categories = get_the_category();
        $category_classes = '';
        foreach ($post_categories as $cat) {
          $category_classes .= ' category-' . $cat->term_id;
        }
      ?>
      <article class="casestudy-article <?php echo esc_attr($category_classes); ?>">
        <a href="<?php the_permalink(); ?>" class="block group duration-300 hover:opacity-70">
          <?php if (has_post_thumbnail()) : ?>
          <div class="overflow-hidden aspect-square rounded-[10px]">
            <?php the_post_thumbnail('full_640', ['class' => 'w-full h-full object-cover transition duration-300 ease-out group-hover:scale-[1.02]']); ?>
          </div>
          <?php endif; ?>
          <h3 class="font-semibold text-blk mt-4"><?php the_title(); ?></h3>
          <?php if ($post_categories) : ?>
          <p class="text-blk-light text-sm mt-1"><?php echo esc_html($post_categories[0]->name); ?></p>
          <?php endif; ?>
        </a>
      </article>
      <?php endwhile; ?>
    </div>
  </div>
</section>
<?php wp_reset_postdata(); ?>
<?php endif; ?>
```

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const categories = document.querySelectorAll('.category');
  const posts = document.querySelectorAll('.casestudy-article');
  
  categories.forEach(category => {
    category.addEventListener('click', () => {
      const isActive = category.classList.contains('active-post');
      const selected = category.getAttribute('data-category');
      
      categories.forEach(c => {
        c.classList.remove('active-post', 'text-blk', 'font-semibold', 'underline');
        c.classList.add('text-blk-light');
      });
      
      if (!isActive) {
        category.classList.add('active-post', 'text-blk', 'font-semibold', 'underline');
        category.classList.remove('text-blk-light');
        
        posts.forEach(post => {
          if (post.classList.contains(selected) || selected === 'all') {
            post.classList.remove('hidden');
            post.classList.add('block');
          } else {
            post.classList.remove('block');
            post.classList.add('hidden');
          }
        });
      } else {
        posts.forEach(post => {
          post.classList.remove('hidden');
          post.classList.add('block');
        });
      }
    });
  });
});
```

---

## 3. Single Case Study Layout (ACF)

**Dependencies:** ACF Pro

```php
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<!-- Hero -->
<?php get_template_part('template-parts/hero'); ?>

<!-- Content -->
<section class="bg-white py-16 md:py-24">
  <div class="grid-main">
    <!-- Meta Sidebar -->
    <div class="col-span-full lg:col-span-3 mb-8 lg:mb-0 lg:sticky lg:top-24 lg:self-start">
      <?php 
      $client = get_field('client_name');
      $industry = get_field('industry');
      $services = get_field('services_provided');
      ?>
      
      <?php if ($client) : ?>
      <div class="mb-6">
        <p class="text-sm font-semibold text-blk-light uppercase tracking-wide">Client</p>
        <p class="text-blk"><?php echo esc_html($client); ?></p>
      </div>
      <?php endif; ?>
      
      <?php if ($industry) : ?>
      <div class="mb-6">
        <p class="text-sm font-semibold text-blk-light uppercase tracking-wide">Industry</p>
        <p class="text-blk"><?php echo esc_html($industry); ?></p>
      </div>
      <?php endif; ?>
      
      <?php if ($services) : ?>
      <div>
        <p class="text-sm font-semibold text-blk-light uppercase tracking-wide">Services</p>
        <div class="prose text-blk">
          <?php echo wp_kses_post($services); ?>
        </div>
      </div>
      <?php endif; ?>
    </div>
    
    <!-- Main Content -->
    <div class="col-span-full lg:col-span-8 lg:col-start-5">
      <div class="prose case-study-prose text-blk">
        <?php the_content(); ?>
      </div>
    </div>
  </div>
</section>

<!-- Gallery Slider -->
<?php 
$gallery = get_field('gallery');
if ($gallery) : 
?>
<section class="bg-cream py-16">
  <div class="px-6 xl:px-20">
    <div id="case-study-slider" class="splide">
      <div class="splide__track">
        <ul class="splide__list">
          <?php foreach ($gallery as $image) : ?>
          <li class="splide__slide">
            <img src="<?php echo esc_url($image['sizes']['full_1200']); ?>" 
                 alt="<?php echo esc_attr($image['alt']); ?>"
                 class="w-full h-auto" />
          </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  new Splide('#case-study-slider', {
    arrows: false,
    type: 'loop',
    pagination: true,
    perPage: 1,
  }).mount();
});
</script>
<?php endif; ?>

<!-- Achievements -->
<?php 
$achievements = get_field('achievements');
if ($achievements) : 
?>
<section class="bg-dark py-16">
  <div class="grid-main">
    <div class="col-span-full">
      <h2 class="heading2 text-white mb-8">Key Achievements</h2>
      <ul class="space-y-4">
        <?php foreach ($achievements as $achievement) : ?>
        <li class="text-white text-lg flex items-start">
          <svg class="w-6 h-6 mr-3 flex-shrink-0 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <?php echo esc_html($achievement['achievement']); ?>
        </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</section>
<?php endif; ?>

<?php endwhile; endif; ?>
```
