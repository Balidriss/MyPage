<?php

$quiz = Core\App::resolve(Core\Quiz::class)->quiz;

$answers = [count($quiz)];

foreach ($quiz as $index => $guess) {
    if ($guess->load('success') !== null) {
        $answers[$index] = $guess->load('answer');
        $successMessages[$index] = $guess->load('success_message');
    } else if ($guess->load('attempt') > 0) {
        $hintMessages[$index] = $guess->load('hint_message');
    }
    $helpMessages[$index] = $guess->helpMessage;
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
    'helpMessages' => $helpMessages ?? '',
    'hintMessages' => $hintMessages ?? '',
    'successMessages' => $successMessages ?? '',
    'answers' => $answers
]);
