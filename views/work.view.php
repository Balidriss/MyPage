<?php require base_path('views/partials/head.php'); ?>

<body>
    <?php require base_path('views/partials/header.php'); ?>
    <main>
        <h1 class="heading"><?= $heading ?></h1>
        <div class="all-work">
            <?php foreach ($projects as $project) : ?>
                <div class="item <?= $tags ?>">
                    <a href=" <?= $project['link'] ?? '/' ?>">

                        <div class="desc">
                            <h2><?= $project['title'] ?>
                            </h2>
                            <h3><?= $project['subtitle'] ?></h3>
                            <p><?= $project['desc'] ?></p>
                            <p>Objectifs : <?= $project['objectif'] ?></p>
                        </div>
                        <p class="date">
                            <?= dateFormat($project) ?>
                        </p>
                    </a>
                </div>


            <?php endforeach ?>
    </main>
    <?php require base_path('views/partials/footer.php'); ?>

</body>

</html>