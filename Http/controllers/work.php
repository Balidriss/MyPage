<?php
$projects = (new Core\CV())->projects;
$tags = 'tag-to-do';
$url = "https://ibsoft.fr/travaux";
$compressedStyle = assetPath('style', "work-style.min.css");
$style = $compressedStyle ?? assetPath('style', "work-style.css");
view("work.view.php", [
    'ico' => assetPath('icon', "fav.ico"),
    'style' => $style,
    'imgs' =>
    [
        'gitlab' => assetPath('img', "gitlab.svg"),
        'github' => assetPath('img', "github.svg"),
    ],
    'js' => assetPath('script', "work.js"),
    'heading' => 'Mes travaux',
    'projects' => $projects,
    'tags' => $tags,
    'url' => $url
]);
