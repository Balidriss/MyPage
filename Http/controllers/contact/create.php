<?php

view("contact/create.view.php", [
    'style' => assetPath('style', "contact-style.css"),
    'heading' => 'Contact',
    'errors' => Core\Session::get('errors'),
]);
