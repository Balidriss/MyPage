 <?php
session_start();
require_once(__DIR__ . '/../config/dbconnect.php');?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Idriss Balijon - Junior dev</title>
    <link rel="icon" href="public/assets/icons/fav.ico" type="image/x-icon">
    <link rel="stylesheet" href="public/styles/index-style.css" type="text/css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        rel="stylesheet">  
        <script src="public/scripts/interactions.js" defer></script>
    <script src="public/scripts/decorations.js" defer></script>
</head>
<?php
    require_once(__DIR__ . '/includes/header.php'); ?>
<body><?php 
if (!($isProd === 'TRUE')): ?> 
   <a style="font-size: 0.5rem; position:absolute; top: 100px" href= "/config/clear_session.php">Clear Session</a>

<?php endif; ?>
    <div class="gradient-bg"></div>
    <main>
    <?php require_once(__DIR__ . '/includes/intro-section.php'); ?>
        <?php require_once(__DIR__ . '/includes/guess-section.php'); ?>
        <?php require_once(__DIR__ . '/includes/cv-section.php'); ?>
        <?php require_once(__DIR__ . '/includes/git-section.php'); ?>
        <?php require_once(__DIR__ . '/includes/blog-section.php'); ?>
        <?php require_once(__DIR__ . '/includes/contact-section.php'); ?>
    </main>
    <?php require_once(__DIR__ . '/includes/footer.php'); ?>

</body>

</html>