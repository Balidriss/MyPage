<?php
if(!isset($_SESSION['GUESSES']))
{
    $_SESSION['GUESSES'] =[];
}
?>
<section id="guess-section">
    <div class="guess-container">
    </div>

   <article class="main-text-section">         
        <div class="title">
                    <p>A propos de moi...</p>
                    <h2>Pouvez-vous deviner ?</h2>
                </div>
                <p id="help-message"></p>
                <p id="hint-message"></p>
                <div class="slider-buttons">
                    <img class="button-left" src="public/assets/img/fi_arrow-right.svg">
                    <img class="button-right" src="public/assets/img/fi_arrow-right.svg">
                    
            </article>
        </section>
        <script src="public/scripts/guess-words.js" defer></script>
