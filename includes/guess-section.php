<?php
if(!isset($_SESSION))
{
    $_SESSION['GUESSES'] =[];
    $_SESSION['TEST']=0;
}
$_SESSION['TEST'] ++;
var_dump($_SESSION);
?>
<section id="guess-section">
    <div class="guess-container">
        
    
        <!--  -->

    </div>
   <article class="main-text-section">         
        <div class="title">
                    <p>A propos de moi...</p>
                    <h2>Pouvez-vous deviner ? <?php                 
                    echo count($_SESSION['GUESSES']);?></h2>
                </div>
                var_dump($_SESSION);
                <p id="help-message"></p>
                <p id="hint-message"></p>
                <div class="slider-buttons">
                    <img class="button-left" src="assets/img/fi_arrow-right.svg">
                    <img class="button-right" src="assets/img/fi_arrow-right.svg">
                    
            </article>
        </section>
        <script src="scripts/js/guess-words.js" defer></script>
