<?php

$compressedStyle = assetPath('style', "contact-style.min.css" . '?' . Core\Version::STYLE_FILE);
$style = $compressedStyle ?? assetPath('style', "contact-style.css" . '?' . Core\Version::STYLE_FILE);
$url = "https://ibsoft.fr/contact";
view("contact/create.view.php", [
    'style' => $style,
    'heading' => 'Contact',
    'errors' => Core\Session::get('errors'),
    'url' => $url
]);
