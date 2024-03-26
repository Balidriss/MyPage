<?php
view("work.view.php", [
    'ico' => assetPath('icon', "fav.ico"),
    'style' => assetPath('style', "work-style.css"),
    'imgs' =>
    [
        'gitlab' => assetPath('img', "gitlab.svg"),
        'github' => assetPath('img', "github.svg"),
    ],
    'js' => assetPath('script', "work.js"),
    'heading' => 'Mes travaux'
]);
