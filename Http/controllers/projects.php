<?php
view("projects.view.php", [
    'ico' => assetPath('icon', "fav.ico"),
    'style' => assetPath('style', "projects-style.css"),
    'js' => assetPath('script', "projects.js"),
    'heading' => 'Projects'
]);
