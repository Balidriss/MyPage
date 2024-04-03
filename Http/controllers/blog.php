<?php

$compressedStyle = assetPath('style', "blog-style.min.css");
$style = $compressedStyle ?? assetPath('style', "blog-style.css");

view("blog.view.php", [
    'ico' => assetPath('icon', "fav.ico"),
    'style' => $style,
    'heading' => 'Blog'
]);
