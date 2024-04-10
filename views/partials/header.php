<header>
    <?php
    if (!(isProd() === 'TRUE')) : ?>
        <a style="font-size: 0.5rem; position:absolute; top: 100px" href="/clear">Clear Session</a>

    <?php endif; ?>
    <nav>
        <div class="logo">
            <a href="/">IB</a>
        </div>
        <menu>
            <li><a href="/">Home</a></li>
            <li><a href="/#cv-section">CV</a></li>
            <li><a href="/#git-section">Git</a></li>
            <li><a href="/#about-section">À propos</a></li>
            <li><a href="/travaux">Travaux</a></li>
        </menu>
        <a href="/contact" class="cta">
            Contactez-moi
        </a>
    </nav>
</header>