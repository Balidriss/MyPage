<?php

use Core\App;
use Core\Database;

$formations = App::resolve(Database::class)->query("SELECT *
FROM formations
ORDER BY date_end DESC;")->get();
// $professions = App::resolve(Database::class)->query("SELECT *
// FROM professions
// ORDER BY date_end DESC;")->get();
// $projects = App::resolve(Database::class)->query("SELECT *
// FROM works
// ORDER BY date_end DESC;")->get();

$tabLastDate = [];

$periodDate = periodFormat($formations[0]['date_end'], 'french');
$tabLastDate[0] = '<strong>' . $periodDate['month'] . '</strong></br>' . $periodDate['year'];

?>
<section id="cv-section">
    <article class="main-text-section">
        <div class="title">
            <p>CV</p>
            <h2>Mon parcours</h2>
        </div>
        <!-- TO DO : from db -->
        <p><strong>Curieux et créatif</strong>, je recherche un environnement stimulant pour accroître mes talents de développeur et participer à la réalisation de projets.</p>
        <div class="download-button-container">
            <p id="download-description"></p>
            <a href=<?= assetPath('download', 'CV_Dev_Web_(numerique&print).pdf') ?> class="cta" download>Télécharger</a>
        </div>
    </article>
    <div class="cv-container">
        <div class="tabs-cv">
            <div class="tab-cv formations show">
                <h3>Formations</h3>
                <p><?= $tabLastDate[0] ?></p>
            </div>
            <div class="tab-cv professions">
                <h3>Professions</h3>
                <p><strong>Septembre</strong></br>
                    2023</p>
            </div>
            <div class="tab-cv projects">
                <h3>Travaux</h3>
                <p><strong>Mars</strong></br>2024</p>
            </div>
        </div>
        <!-- TO DO : from db -->
        <?php require_once(__DIR__ . '/cv-formations.php'); ?>
        <?php require_once(__DIR__ . '/cv-professions.php'); ?>
        <?php require_once(__DIR__ . '/cv-projects.php'); ?>
</section>