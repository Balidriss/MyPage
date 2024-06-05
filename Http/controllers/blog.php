<?php

$compressedStyle = assetPath('style', "blog-style.min.css");
$style = $compressedStyle ?? assetPath('style', "blog-style.css");
$url = "https://ibsoft.fr/blog";

view("blog.view.php", [
    'ico' => assetPath('icon', "fav.ico"),
    'style' => $style,
    'heading' => 'Blog',
    'url' => $url
]);
