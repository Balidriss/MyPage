<section id="cv-section">
    <article class="main-text-section">
        <div class="title">
            <p>CV</p>
            <h2>Mon parcours</h2>
        </div>
        <p>Une perspective unique dans le monde du numérique.</p>
        <!-- TO DO : from db -->
        <p><em><strong>Curieux et créatif</strong>, je recherche un environnement stimulant pour accroître mes talents de développeur web et participer à la réalisation de projets. Je recherche une entreprise pour une alternance en collaboration avec Human Booster du <strong>18 mars 2024 au 12 mars 2025</strong> sur un rythme de 3 semaines par mois en entreprise.</em></p>
        <div class="download-button-container">
            <p id="download-description"></p>
            <a href="download/CV_Dev_Web_Alternance_Balijon_2024 _ 18Mars2024-12Mars2025(numerique&print).pdf" class="cta" download>Télécharger</a>
        </div>
    </article>
    <div class="cv-container">
        <div class="tabs-cv">
            <div class="tab-cv formations show">
                <h3>Formations</h3>
                <p><strong>Janvier</strong></br>
                    2024</p>
            </div>
            <div class="tab-cv professions">
                <h3>Professions</h3>
                <p><strong>Septembre</strong></br>
                    2023</p>
            </div>
            <div class="tab-cv projects">
                <h3>Travaux</h3>
                <p><strong>Fevriers</strong></br>2024</p>
            </div>
        </div>
        <!-- TO DO : from db -->
        <?php require_once(__DIR__ . '/cv-formations.php'); ?>
        <?php require_once(__DIR__ . '/cv-professions.php'); ?>
        <?php require_once(__DIR__ . '/cv-projects.php'); ?>
</section>