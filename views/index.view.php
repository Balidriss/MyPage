<?php require base_path('views/partials/head.php'); ?>

<body>
    <?php require base_path('views/partials/header.php'); ?>
    <div class="gradient-bg" inert></div>
    <video autoplay muted loop id="myVideo" inert>
        <source src="<?= assetPath('video', 'bgloop.mp4') ?>" type="video/mp4">
    </video>


    <main>
        <?php require base_path('views/partials/Home/intro-section.php'); ?>
        <?php require base_path('views/partials/Home/CV/cv-section.php'); ?>
        <?php require base_path('views/partials/Home/blog-section.php'); ?>
        <?php require base_path('views/partials/Home/git-section.php'); ?>
        <?php require base_path('views/partials/Home/guess-section.php'); ?>
        <?php require base_path('views/partials/Home/about-section.php'); ?>
    </main>
    <?php require base_path('views/partials/footer.php'); ?>

</body>

</html>