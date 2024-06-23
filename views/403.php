<?php require base_path('views/partials/head.php'); ?>
<?php require base_path('Http/404.php'); ?>
<main class="notfound">

    <h1 class="heading">403</h1>
    <p class="sorry"><strong>Désolé</strong>, vous n'êtes pas authorisé.</p>
    <p class="quote"><?= $randomMessage['quote'] ?></p>
    <p class="from"><?= $randomMessage['from'] ?> </p>
    <p class="back">
        <a class="" href="/">Revenir à l'accueil.</a>
    </p>
</main>