<?php require base_path('views/partials/head.php'); ?>

<body>
    <?php require base_path('views/partials/header.php'); ?>
    <div class="gradient-bg"></div>
    <video autoplay muted loop id="myVideo">
        <source src="<?= assetPath('video', 'bgloop.mp4') ?>" type="video/mp4">
    </video>
    <main>
        <h1 class="heading">Blog</h1>
    </main>
    <?php require base_path('views/partials/footer.php'); ?>

</body>

</html>