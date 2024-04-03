<?php

$compressedStyle = assetPath('style', "contact-style.min.css");
$style = $compressedStyle ?? assetPath('style', "contact-style.css");

view("contact/create.view.php", [
    'style' => $style,
    'heading' => 'Contact',
    'errors' => Core\Session::get('errors'),
]);
