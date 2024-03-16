<?php
view("index.view.php", [
    'ico' => assetPath('icon', "fav.ico"),
    'style' => assetPath('style', "home-style.css"),
    'imgs' =>
    [
        'gitlab' => assetPath('img', "gitlab.svg"),
        'github' => assetPath('img', "github.svg"),
        'projects' => assetPath('img', "balidriss.png")
    ],
    'js' => assetPath('script', "home.js"),
    'heading' => 'Accueil'
]);
