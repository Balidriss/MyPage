<?php

$compressedStyle = assetPath('style', "contact-style.min.css");
$style = $compressedStyle ?? assetPath('style', "contact-style.css");
$url = "https://ibsoft.fr/contact";
view("contact/create.view.php", [
    'style' => $style,
    'heading' => 'Contact',
    'errors' => Core\Session::get('errors'),
    'url' => $url
]);
