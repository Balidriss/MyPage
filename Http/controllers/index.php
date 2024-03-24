<?php

$quiz = Core\App::resolve(Core\Quiz::class)->quiz;

view("index.view.php", [
    'ico' => assetPath('icon', "fav.ico"),
    'style' => assetPath('style', "home-style.css"),
    'imgs' =>
    [
        'gitlab' => assetPath('img', "gitlab.svg"),
        'github' => assetPath('img', "github.svg"),
        'work' => assetPath('img', "balidriss.png")
    ],
    'js' => assetPath('script', "home.js"),
    'heading' => 'Accueil',
    'quiz' => $quiz,
    'i' => 1
]);
