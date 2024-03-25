<section id="quiz-section">
    <div class="quiz-container">
        <?php
        foreach ($quiz as $i => $guess) : ?>
            <form class="<?php echo 'guess-' . strval($i)  ?>" method="post" action="" onsubmit="">
                <input type='hidden' name='index' value='<?php echo strval($i) ?>'>
                <img src="<?php echo 'assets/img/quiz/guess-' . strval($i) . '.png' ?>" title="<?= $helpMessages[$i] ?? '' ?>">
                <p class="answer"><?= $answers[$i] ?? '' ?></p>
                <?php if (empty($answers[$i])) : ?>
                    <div class="attempt-field"><input type='text' name='attempt' placeholder='Qui suis je ?'>
                        <input type='submit' value='▲'>
                    </div>
                <?php endif ?>
                <p class="success-message"><?= $successMessages[$i] ?? '' ?></p>
            </form>
        <?php endforeach ?>
    </div>
    <article class="main-text-section">
        <div class="title">
            <p>A propos de moi...</p>
            <h2>Quiz !</h2>
        </div>
        <p id="help-message">
            <?= $helpMessages[1] ?? '' ?>
        </p>
        <p id="hint-message"><?= $hintMessages[1] ?? '' ?>
        </p>
        <div class="slider-buttons">
            <img class="button-left" src=<?= assetPath('img', 'fi_arrow-right.svg') ?>>
            <img class="button-right" src=<?= assetPath('img', 'fi_arrow-right.svg') ?>>
    </article>
</section>