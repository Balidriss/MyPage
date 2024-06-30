<?php

$compressedStyle = assetPath('style', "blog-style.min.css" . '?' . Core\Version::STYLE_FILE);
$style = $compressedStyle ?? assetPath('style', "blog-style.css" . '?' . Core\Version::STYLE_FILE);
$url = "https://ibsoft.fr/blog";

view("blog.view.php", [
    'ico' => assetPath('icon', "fav.ico"),
    'style' => $style,
    'heading' => 'Blog',
    'url' => $url
]);
