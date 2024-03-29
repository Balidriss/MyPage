<?php
$quiz = Core\App::resolve(Core\Quiz::class)->quiz;

$answers = [count($quiz)];
$tabRecent = [];
$formations = (new Core\CV())->formations;
$professions = (new Core\CV())->professions;
$projects = (new Core\CV())->projects;

$recentFormation = dateFormat($formations[0], true) ?? dateFormat($formations[0], true);
$recentProfession = dateFormat($professions[0], true) ?? dateFormat($professions[0], true);
$recentProject = dateFormat($projects[0], true) ?? dateFormat($projects[1], true);

$tabRecents[0] = $recentFormation;
$tabRecents[1] = $recentProfession;
$tabRecents[2] = $recentProject;

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
    'answers' => $answers,
    'formations' => $formations,
    'professions' => $professions,
    'projects' => $projects,
    'tabRecents' => $tabRecents
]);
