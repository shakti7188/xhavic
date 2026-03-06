<?php
/**
 * Dynamic Blog Post Renderer
 * Renders posts created via the admin panel.
 * Extracts CSS/navbar/footer from a built Astro page for consistent styling.
 */

// ── Load post data ─────────────────────────────────────
$slug = preg_replace('/[^a-z0-9-]/', '', $_GET['slug'] ?? '');
if (!$slug) { http_response_code(404); header('Location: /blog/'); exit; }

$postFile = dirname(__DIR__) . '/blog-data/posts/' . $slug . '.json';
if (!file_exists($postFile)) { http_response_code(404); header('Location: /blog/'); exit; }

$post = json_decode(file_get_contents($postFile), true);
if (!$post || !empty($post['draft'])) { http_response_code(404); header('Location: /blog/'); exit; }

// ── Extract template parts from a built Astro page ─────
$templatePage = dirname(__DIR__) . '/blog/index.html';
$templateHtml = file_exists($templatePage) ? file_get_contents($templatePage) : '';

// Extract <head> content (CSS links, fonts, etc.)
$headContent = '';
if (preg_match('/<head>(.*?)<\/head>/s', $templateHtml, $m)) {
    $headContent = $m[1];
    // Remove the existing title and meta tags — we'll add our own
    $headContent = preg_replace('/<title>.*?<\/title>/', '', $headContent);
    $headContent = preg_replace('/<meta\s+name="(title|description)"[^>]*>/', '', $headContent);
    $headContent = preg_replace('/<meta\s+property="(og:|twitter:)[^"]*"[^>]*>/', '', $headContent);
    $headContent = preg_replace('/<link\s+rel="canonical"[^>]*>/', '', $headContent);
    $headContent = preg_replace('/<link\s+rel="alternate"[^>]*hreflang[^>]*>/', '', $headContent);
}

// Extract everything from opening body to <main>
$navbarHtml = '';
if (preg_match('/<body[^>]*>(.*?)<main\s+id="main-content">/s', $templateHtml, $m)) {
    $navbarHtml = $m[1];
}

// Extract footer (from </main> to </body>)
$footerHtml = '';
if (preg_match('/<\/main>(.*?)<\/body>/s', $templateHtml, $m)) {
    $footerHtml = $m[1];
    // Remove existing JSON-LD that has page-specific data, keep Organization/WebSite ones
    // Actually keep all JSON-LD from footer — they're generic
}

// ── Prepare SEO values ─────────────────────────────────
$siteUrl = 'https://xhavic.com';
$title = htmlspecialchars($post['title'] ?? 'Blog Post', ENT_QUOTES, 'UTF-8');
$description = htmlspecialchars($post['description'] ?? '', ENT_QUOTES, 'UTF-8');
$image = $post['image'] ?? '/og-default.png';
$imageUrl = (strpos($image, 'http') === 0) ? $image : $siteUrl . $image;
$canonicalUrl = $siteUrl . '/blog/' . $slug . '/';
$publishedAt = $post['publishedAt'] ?? date('Y-m-d');
$author = htmlspecialchars($post['author'] ?? 'Xhavic Team', ENT_QUOTES, 'UTF-8');
$category = htmlspecialchars($post['category'] ?? 'Article', ENT_QUOTES, 'UTF-8');
$readingTime = $post['readingTime'] ?? '';
$content = $post['content'] ?? '';

$pubDateFormatted = date('F j, Y', strtotime($publishedAt));
$pubDateISO = date('c', strtotime($publishedAt));
$updatedAt = !empty($post['updatedAt']) ? date('c', strtotime($post['updatedAt'])) : $pubDateISO;

// ── Article JSON-LD ────────────────────────────────────
$articleJsonLd = json_encode([
    '@context' => 'https://schema.org',
    '@type' => 'Article',
    'headline' => $post['title'],
    'description' => $post['description'] ?? '',
    'image' => $imageUrl,
    'datePublished' => $pubDateISO,
    'dateModified' => $updatedAt,
    'author' => [
        '@type' => 'Person',
        'name' => $post['author'] ?? 'Xhavic Team',
    ],
    'publisher' => [
        '@type' => 'Organization',
        'name' => 'Xhavic',
        'logo' => ['@type' => 'ImageObject', 'url' => $siteUrl . '/images/logo.png'],
    ],
    'mainEntityOfPage' => ['@type' => 'WebPage', '@id' => $canonicalUrl],
], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
?>
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
<?php echo $headContent; ?>

<!-- SEO: Dynamic post overrides -->
<title><?php echo $title; ?> — Xhavic Blog</title>
<meta name="title" content="<?php echo $title; ?> — Xhavic Blog">
<meta name="description" content="<?php echo $description; ?>">
<link rel="canonical" href="<?php echo $canonicalUrl; ?>">
<link rel="alternate" hreflang="en" href="<?php echo $canonicalUrl; ?>">
<link rel="alternate" hreflang="x-default" href="<?php echo $canonicalUrl; ?>">

<!-- Open Graph -->
<meta property="og:type" content="article">
<meta property="og:url" content="<?php echo $canonicalUrl; ?>">
<meta property="og:title" content="<?php echo $title; ?>">
<meta property="og:description" content="<?php echo $description; ?>">
<meta property="og:image" content="<?php echo htmlspecialchars($imageUrl); ?>">
<meta property="og:site_name" content="Xhavic">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="<?php echo $canonicalUrl; ?>">
<meta property="twitter:title" content="<?php echo $title; ?>">
<meta property="twitter:description" content="<?php echo $description; ?>">
<meta property="twitter:image" content="<?php echo htmlspecialchars($imageUrl); ?>">

<style>
/* Blog article styles (from BlogLayout.astro) */
.blog-article { padding-top: 80px; }
.blog-article__container { max-width: 760px; margin: 0 auto; padding: 0 18px; }
.blog-article__header { padding: 40px 0 32px; border-bottom: 1px solid rgba(16,24,40,.08); margin-bottom: 40px; }
.blog-article__tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.blog-article__tag { display: inline-flex; align-items: center; padding: 4px 12px; border-radius: 999px; background: #f2f4ff; color: #2262ff; font-size: 12px; font-weight: 700; text-decoration: none; border: 1px solid rgba(34,98,255,.12); }
.blog-article__title { margin: 0 0 16px; font-size: clamp(28px,4vw,42px); font-weight: 800; letter-spacing: -.03em; line-height: 1.1; color: #101828; }
.blog-article__meta { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; font-size: 14px; color: #667085; }
.blog-article__author { font-weight: 600; color: #101828; }
.blog-article__sep { color: #d0d5dd; user-select: none; }
.blog-article__date,.blog-article__readTime { font-weight: 500; }
.blog-article__body { padding-bottom: 80px; }
/* Prose styles for content */
.blog-article__body h2 { font-size: 24px; font-weight: 700; color: #101828; margin: 32px 0 12px; }
.blog-article__body h3 { font-size: 20px; font-weight: 700; color: #101828; margin: 24px 0 10px; }
.blog-article__body p { font-size: 16px; line-height: 1.75; color: #374151; margin: 0 0 16px; }
.blog-article__body ul,.blog-article__body ol { margin: 0 0 16px; padding-left: 24px; }
.blog-article__body li { font-size: 16px; line-height: 1.75; color: #374151; margin-bottom: 8px; }
.blog-article__body a { color: #2262ff; text-decoration: underline; }
.blog-article__body blockquote { border-left: 4px solid #2262ff; padding: 12px 20px; margin: 16px 0; background: #f8fafc; color: #475569; font-style: italic; border-radius: 0 8px 8px 0; }
.blog-article__body pre { background: #1e293b; color: #e2e8f0; padding: 16px 20px; border-radius: 8px; overflow-x: auto; margin: 16px 0; font-size: 14px; }
.blog-article__body code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 14px; color: #1e293b; }
.blog-article__body pre code { background: none; padding: 0; }
.blog-article__body img { max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0; }
@media (max-width: 760px) {
  .blog-article { padding-top: 64px; }
  .blog-article__header { padding: 28px 0 24px; margin-bottom: 28px; }
}
</style>
</head>
<body class="min-h-screen">

<?php echo $navbarHtml; ?>

<main id="main-content">
  <article class="blog-article">
    <header class="blog-article__header">
      <div class="blog-article__container">
        <div class="blog-article__tags">
          <span class="blog-article__tag"><?php echo $category; ?></span>
        </div>
        <h1 class="blog-article__title"><?php echo $title; ?></h1>
        <div class="blog-article__meta">
          <div class="blog-article__author"><span><?php echo $author; ?></span></div>
          <span class="blog-article__sep" aria-hidden="true">&middot;</span>
          <time datetime="<?php echo $pubDateISO; ?>" class="blog-article__date"><?php echo $pubDateFormatted; ?></time>
          <?php if ($readingTime): ?>
          <span class="blog-article__sep" aria-hidden="true">&middot;</span>
          <span class="blog-article__readTime"><?php echo htmlspecialchars($readingTime); ?></span>
          <?php endif; ?>
        </div>
      </div>
    </header>
    <div class="blog-article__body">
      <div class="blog-article__container">
        <?php echo $content; ?>
      </div>
    </div>
  </article>

  <!-- Article JSON-LD -->
  <script type="application/ld+json"><?php echo $articleJsonLd; ?></script>
</main>

<?php echo $footerHtml; ?>

</body>
</html>
