<section id="cv-section">
    <article class="main-text-section">
        <div class="title">
            <p>CV</p>
            <h2>Mon parcours</h2>
        </div>
        <!-- TO DO : from db -->
        <p><strong>Curieux et créatif</strong>, je suis actuellement en formation pour obtenir le titre professionnel
            NIVEAU 6 - BAC +4 </br> <strong class="cda">Concepteur Développeur d'Applications</strong>. </p>
        <p>À partir du
            <strong>14 avril 2025</strong>, je serai disponible pour relever de nouveaux défis professionnels et
            contribuer à des projets ambitieux.
        </p>
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