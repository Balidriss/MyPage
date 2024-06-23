<?php
$heading = 'Merci';
$compressedStyle = assetPath('style', "contact-style.min.css");
$style = $compressedStyle ?? assetPath('style', "contact-style.css");
$url = "https://ibsoft.fr/contact";

view("contact/success.view.php", [
    'heading' => $heading,
    'url' => $url,
    'style' => $style
]);
