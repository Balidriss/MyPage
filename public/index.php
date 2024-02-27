 <?php
session_start();
require_once(__DIR__ . '/../config/dbconnect.php');?>
<!DOCTYPE html>
<html lang="fr">

<head>
<?php require_once(__DIR__ . '/includes/head.php'); ?>
<!-- todo make a script that will adapt title & links for each page -->
<link rel="stylesheet" href="styles/index-style.css" type="text/css" />
    <title>Idriss Balijon - Junior dev</title>
    
</head>
<?php
    require_once(__DIR__ . '/includes/header.php'); ?>
<body><?php 
if (!($isProd === 'TRUE')): ?> 
   <a style="font-size: 0.5rem; position:absolute; top: 100px" href= "../config/clear_session.php">Clear Session</a>

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