<?php
$projects = (new Core\CV())->projects;
$tags = 'tag-to-do';
$url = "https://ibsoft.fr/travaux";
$compressedStyle = assetPath('script', "work.js" . '?' . Core\Version::STYLE_FILE);
$style = $compressedStyle ?? assetPath('style', "work-style.css" . '?' . Core\Version::STYLE_FILE);
$js = assetPath('script', "home.js" . '?' . Core\Version::JS_FILE);
view("work.view.php", [
    'ico' => assetPath('icon', "fav.ico"),
    'style' => $style,
    'imgs' =>
    [
        'gitlab' => assetPath('img', "gitlab.svg"),
        'github' => assetPath('img', "github.svg"),
    ],
    'js' => $js,
    'heading' => 'Mes travaux',
    'projects' => $projects,
    'tags' => $tags,
    'url' => $url
]);
