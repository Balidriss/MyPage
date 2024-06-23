<?php require base_path('views/partials/head.php'); ?>

<body>
    <?php require base_path('views/partials/header.php'); ?>
    <video autoplay muted loop id="myVideo">
        <source src="<?= assetPath('video', 'bgloop.mp4') ?>" type="video/mp4">
    </video>
    <main>
        <h1 class="heading"><?= $heading ?></h1>
        <section id="section-form">
            <p class="preface"></p>
            <div class="container">

                <form method="POST" action="/contact" class="">
                    <div>
                        <label for="email" class="email-label">Email</label>
                        <input id="email" name="email" value="<?= old('email') ?: userEmail() ?? '' ?>" class="email-input" placeholder="votre@email.com">
                        <?php if (isset($errors['email'])) : ?>
                            <p class="error"><?= $errors['email'] ?></p>
                        <?php endif; ?>
                    </div>
                    <div>
                        <label for="subject" class="subject-label">Objet</label>
                        <input type="text" id="subject" name="subject" value="<?= old('subject') ?>" class="subject-input" placeholder="Quel est le sujet de votre message ?">
                        <?php if (isset($errors['subject'])) : ?>
                            <p class="error"><?= $errors['subject'] ?></p>
                        <?php endif; ?>
                    </div>
                    <div class="">
                        <label for="message" class="">Votre message</label>
                        <textarea id="message" name="body" rows="6" class="" placeholder="Laissez votre message."><?= old('body') ?></textarea>
                        <?php if (isset($errors['body'])) : ?>
                            <p class="error"><?= $errors['body'] ?></p>
                        <?php endif; ?>
                    </div>
                    <div class="consent-checkbox">
                        <input type="checkbox" id="consent" name="consent" value="consent">
                        <label for="consent">J'accepte que mes informations soient utilisées pour me contacter dans le cadre de ma demande.</label>
                        <?php if (isset($errors['consent'])) : ?>
                            <p class="error"><?= $errors['consent'] ?></p>
                        <?php endif; ?>
                    </div>
                    <button type="submit" class="">Envoyer</button>
                </form>
            </div>
        </section>

    </main>
    <?php require base_path('views/partials/footer.php'); ?>

</body>

</html>