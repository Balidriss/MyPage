<?php
$heading = 'Merci';
$compressedStyle = assetPath('style', "contact-style.min.css" . '?' . Core\Version::STYLE_FILE);
$style = $compressedStyle ?? assetPath('style', "contact-style.css" . '?' . Core\Version::STYLE_FILE);
$url = "https://ibsoft.fr/contact";

view("contact/success.view.php", [
    'heading' => $heading,
    'url' => $url,
    'style' => $style
]);
