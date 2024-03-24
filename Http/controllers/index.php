<?php

$quiz = Core\App::resolve(Core\Quiz::class)->quiz;

$answers = [count($quiz)];

foreach ($quiz as $index => $guess) {
    if ($guess->load('success')) {
        $answers[$index] = $guess->load('answer');
    }
}

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
    'helpMessage' => $quiz[1]->helpMessage ?? '',
    'additionalMessage' => $quiz[1]->load('success_message') ?? '',
    'answers' => $answers
]);
