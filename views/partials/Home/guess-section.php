<section id="quiz-section">
    <div class="quiz-container">
        <?php foreach ($quiz as $guess) : ?>
            <form class="<?php echo 'guess-' . strval($i)  ?>" method="post" action="" onsubmit="">
                <input type='hidden' name='id' value='<?php echo strval($guess['guess_id']) ?>'>
                <img src="<?php echo 'assets/img/quiz/guess-' . strval($i) . '.png' ?>" title="<?php echo $guess['help_message'] ?>">
                <p class="answer"></p>
                <p style="display:none;" class="hidden-additional-message"></p>
                <div class="attempt-field"><input type='text' name='attempt' placeholder='Qui suis je ?'>
                    <input type='submit' value='▲' disabled>
                </div>

            </form>
        <?php
            $i++;
        endforeach ?>
    </div>
    <article class="main-text-section">
        <div class="title">
            <p>A propos de moi...</p>
            <h2>Quiz !</h2>
            <p style="font-size:0.5em">actuellement refais le code</p>
        </div>
        <p id="help-message"><?php echo $quiz[0]['help_message']  ?></p>
        <p id="additional-message"> message supplémentaire ici
        </p>
        <div class="slider-buttons">
            <img class="button-left" src=<?= assetPath('img', 'fi_arrow-right.svg') ?>>
            <img class="button-right" src=<?= assetPath('img', 'fi_arrow-right.svg') ?>>

    </article>
</section>