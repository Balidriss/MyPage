<section id="cv-section">
    <article class="main-text-section">
        <div class="title">
            <p>CV</p>
            <h2>Mon parcours</h2>
        </div>
        <!-- TO DO : from db -->
        <p><strong>Curieux et créatif</strong>, je recherche un stage du <strong> 13 Décembre 2024 </strong> au <strong> 14 Avril 2025 </strong> pour la préparation au titre professionnel NIVEAU 6 - BAC +4 </br> <strong class="cda">Concepteur Développeur d'Application</strong>.</p>
        <div class="download-button-container">
            <p id="download-description"></p>
            <a href=<?= $cvDownload ?> class="cta" download>Télécharger</a>
        </div>
    </article>
    <div class="cv-container">
        <div class="tabs-cv">
            <div class="tab-cv formations show">
                <h3>Formations</h3>
                <p><?= $tabRecents[0] ?></p>
            </div>
            <div class="tab-cv professions">
                <h3>Professions</h3>
                <p><?= $tabRecents[1] ?></p>
            </div>
            <div class="tab-cv projects">
                <h3>Travaux</h3>
                <p><?= $tabRecents[2] ?></p>
            </div>
        </div>
        <?php require_once(__DIR__ . '/cv-formations.php'); ?>
        <?php require_once(__DIR__ . '/cv-professions.php'); ?>
        <?php require_once(__DIR__ . '/cv-projects.php'); ?>
    </div>
</section>