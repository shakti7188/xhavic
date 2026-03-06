<?php
/**
 * Xhavic Blog Admin API
 * PHP-based backend for blog post management.
 * Storage: JSON files in /blog-data/posts/
 * No database required.
 */
session_start();
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

// ── Paths ──────────────────────────────────────────────
define('ROOT',        dirname(__DIR__));
define('DATA_DIR',    ROOT . '/blog-data');
define('POSTS_DIR',   DATA_DIR . '/posts');
define('UPLOADS_DIR', ROOT . '/blog/uploads');
define('CONFIG_FILE', DATA_DIR . '/config.json');

// Ensure directories exist
foreach ([DATA_DIR, POSTS_DIR, UPLOADS_DIR] as $d) {
    if (!is_dir($d)) mkdir($d, 0755, true);
}

// ── Helpers ────────────────────────────────────────────
function jsonResponse($data, $code = 200) {
    http_response_code($code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function requireAuth() {
    if (empty($_SESSION['admin_authenticated'])) {
        jsonResponse(['error' => 'Unauthorized'], 401);
    }
}

function loadConfig() {
    if (!file_exists(CONFIG_FILE)) return null;
    return json_decode(file_get_contents(CONFIG_FILE), true);
}

function saveConfig($cfg) {
    file_put_contents(CONFIG_FILE, json_encode($cfg, JSON_PRETTY_PRINT));
}

function slugify($text) {
    $text = strtolower(trim($text));
    $text = preg_replace('/[^a-z0-9\s-]/', '', $text);
    $text = preg_replace('/[\s-]+/', '-', $text);
    return trim($text, '-');
}

function getAllPosts() {
    $posts = [];
    $files = glob(POSTS_DIR . '/*.json');
    foreach ($files as $f) {
        $post = json_decode(file_get_contents($f), true);
        if ($post) $posts[] = $post;
    }
    usort($posts, function($a, $b) {
        return strtotime($b['publishedAt'] ?? '2000-01-01') - strtotime($a['publishedAt'] ?? '2000-01-01');
    });
    return $posts;
}

function getPost($slug) {
    $file = POSTS_DIR . '/' . basename($slug) . '.json';
    if (!file_exists($file)) return null;
    return json_decode(file_get_contents($file), true);
}

function savePost($data) {
    $file = POSTS_DIR . '/' . basename($data['slug']) . '.json';
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
}

function deletePost($slug) {
    $file = POSTS_DIR . '/' . basename($slug) . '.json';
    if (file_exists($file)) unlink($file);
}

function estimateReadingTime($html) {
    $text = strip_tags($html);
    $words = str_word_count($text);
    $minutes = max(1, ceil($words / 200));
    return $minutes . ' min read';
}

// ── Route ──────────────────────────────────────────────
$action = $_GET['action'] ?? $_POST['action'] ?? '';

switch ($action) {

    // ── Setup (first-time password) ────────────────────
    case 'setup_status':
        $cfg = loadConfig();
        jsonResponse(['needsSetup' => empty($cfg['password_hash'])]);
        break;

    case 'setup':
        $cfg = loadConfig();
        if (!empty($cfg['password_hash'])) {
            jsonResponse(['error' => 'Already configured'], 400);
        }
        $input = json_decode(file_get_contents('php://input'), true);
        $password = $input['password'] ?? '';
        if (strlen($password) < 6) {
            jsonResponse(['error' => 'Password must be at least 6 characters'], 400);
        }
        saveConfig([
            'password_hash' => password_hash($password, PASSWORD_BCRYPT),
            'created_at'    => date('c'),
        ]);
        $_SESSION['admin_authenticated'] = true;
        jsonResponse(['ok' => true]);
        break;

    // ── Auth ────────────────────────────────────────────
    case 'login':
        $cfg = loadConfig();
        if (empty($cfg['password_hash'])) {
            jsonResponse(['error' => 'Not set up yet'], 400);
        }
        $input = json_decode(file_get_contents('php://input'), true);
        $password = $input['password'] ?? '';
        if (password_verify($password, $cfg['password_hash'])) {
            $_SESSION['admin_authenticated'] = true;
            jsonResponse(['ok' => true]);
        }
        jsonResponse(['error' => 'Invalid password'], 401);
        break;

    case 'logout':
        session_destroy();
        jsonResponse(['ok' => true]);
        break;

    case 'check_auth':
        jsonResponse(['authenticated' => !empty($_SESSION['admin_authenticated'])]);
        break;

    // ── Posts (authenticated) ───────────────────────────
    case 'posts':
        requireAuth();
        jsonResponse(['posts' => getAllPosts()]);
        break;

    case 'post':
        requireAuth();
        $slug = $_GET['slug'] ?? '';
        $post = getPost($slug);
        if (!$post) jsonResponse(['error' => 'Post not found'], 404);
        jsonResponse(['post' => $post]);
        break;

    case 'save':
        requireAuth();
        $input = json_decode(file_get_contents('php://input'), true);
        if (empty($input['title'])) {
            jsonResponse(['error' => 'Title is required'], 400);
        }

        $slug = !empty($input['slug']) ? slugify($input['slug']) : slugify($input['title']);
        $existing = getPost($slug);

        $post = [
            'slug'        => $slug,
            'title'       => trim($input['title']),
            'description' => trim($input['description'] ?? ''),
            'category'    => trim($input['category'] ?? 'Article'),
            'content'     => $input['content'] ?? '',
            'image'       => trim($input['image'] ?? ''),
            'imageAlt'    => trim($input['imageAlt'] ?? $input['title']),
            'author'      => trim($input['author'] ?? 'Xhavic Team'),
            'publishedAt' => $input['publishedAt'] ?? date('Y-m-d'),
            'draft'       => !empty($input['draft']),
            'readingTime' => estimateReadingTime($input['content'] ?? ''),
            'createdAt'   => $existing['createdAt'] ?? date('c'),
            'updatedAt'   => date('c'),
        ];

        savePost($post);
        jsonResponse(['ok' => true, 'post' => $post]);
        break;

    case 'delete':
        requireAuth();
        $input = json_decode(file_get_contents('php://input'), true);
        $slug = $input['slug'] ?? '';
        if (empty($slug)) jsonResponse(['error' => 'Slug required'], 400);
        deletePost($slug);
        jsonResponse(['ok' => true]);
        break;

    // ── Image Upload ───────────────────────────────────
    case 'upload':
        requireAuth();
        if (empty($_FILES['image'])) {
            jsonResponse(['error' => 'No image file'], 400);
        }
        $file = $_FILES['image'];
        $allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
        if (!in_array($file['type'], $allowed)) {
            jsonResponse(['error' => 'Invalid file type. Allowed: JPG, PNG, WebP, GIF, SVG'], 400);
        }
        if ($file['size'] > 5 * 1024 * 1024) {
            jsonResponse(['error' => 'File too large. Max 5MB'], 400);
        }

        $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
        $name = slugify(pathinfo($file['name'], PATHINFO_FILENAME));
        $filename = $name . '-' . substr(md5(uniqid()), 0, 6) . '.' . $ext;
        $dest = UPLOADS_DIR . '/' . $filename;

        if (!move_uploaded_file($file['tmp_name'], $dest)) {
            jsonResponse(['error' => 'Upload failed'], 500);
        }

        jsonResponse(['ok' => true, 'url' => '/blog/uploads/' . $filename]);
        break;

    // ── Public API (for blog index) ────────────────────
    case 'posts_public':
        $posts = getAllPosts();
        // Filter out drafts, strip content for listing
        $public = [];
        foreach ($posts as $p) {
            if (!empty($p['draft'])) continue;
            $public[] = [
                'slug'        => $p['slug'],
                'title'       => $p['title'],
                'description' => $p['description'],
                'category'    => $p['category'],
                'image'       => $p['image'],
                'imageAlt'    => $p['imageAlt'] ?? $p['title'],
                'author'      => $p['author'] ?? 'Xhavic Team',
                'publishedAt' => $p['publishedAt'],
                'readingTime' => $p['readingTime'] ?? '',
            ];
        }
        jsonResponse(['posts' => $public]);
        break;

    // ── Public: single post data (for post.php) ────────
    case 'post_public':
        $slug = $_GET['slug'] ?? '';
        $post = getPost($slug);
        if (!$post || !empty($post['draft'])) {
            jsonResponse(['error' => 'Post not found'], 404);
        }
        jsonResponse(['post' => $post]);
        break;

    // ── Change Password ────────────────────────────────
    case 'change_password':
        requireAuth();
        $input = json_decode(file_get_contents('php://input'), true);
        $cfg = loadConfig();
        if (!password_verify($input['current'] ?? '', $cfg['password_hash'])) {
            jsonResponse(['error' => 'Current password is incorrect'], 400);
        }
        if (strlen($input['new'] ?? '') < 6) {
            jsonResponse(['error' => 'New password must be at least 6 characters'], 400);
        }
        $cfg['password_hash'] = password_hash($input['new'], PASSWORD_BCRYPT);
        saveConfig($cfg);
        jsonResponse(['ok' => true]);
        break;

    default:
        jsonResponse(['error' => 'Unknown action'], 400);
}
