<!DOCTYPE html>
<html lang="fr">


<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="<?= $ico ?? assetPath('icon', 'fav.ico') ?>" type="image/x-icon">
    <?php if (isset($url)) : ?>
        <link rel="canonical" href="<?= $url ?? '' ?>" />
    <?php endif ?>
    <?php if (isset($js)) : ?>
        <script src="<?= $js ?? "" ?>" defer></script>
    <?php endif ?>
    <link rel="stylesheet" href="<?= $style ?? assetPath('style', 'error-style.min.css') ?>" type="text/css" />
    <title>Idriss Balijon - <?= $heading ?? 'oups' ?></title>
    <meta name="google-site-verification" content="BBkrIcPlxffswSeklufhI470tEq0dI6U-ONTBV4b42U">
    <meta name="description" content="Curieux et créatif, je recherche un stage du 13 Décembre 2024 au 14 Avril 2025 pour l'obtention du diplôme Concepteur Développeur d'Application.">
</head>