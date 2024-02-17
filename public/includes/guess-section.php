<?php
require_once(__DIR__ . '/../../config/dbconnect.php');
if(!isset($_SESSION['GUESSES']))
{
    $_SESSION['GUESSES'] =[];
}

$guessesStatement = $mysqlClient->prepare('SELECT guess_id, help_message FROM guesses');
$guessesStatement->execute();
$guesses= $guessesStatement->fetchAll();
$i = 1;
?>
<section id="guess-section">
    <div class="guess-container">
        <?php foreach ($guesses as $guess) :?>
            <form id="<?php echo'form-guess-'. strval($i)  ?>" method="post" action="guessAPI.php" onsubmit="event.preventDefault();guessAttempt(event, this);">
            <img src="<?php echo'public/assets/img/guesses/guess-'.strval($i).'.png'?>" title="<?php echo $guess['help_message'] ?>" >
         
            <p class="answer"><?php 
            if(isset($_SESSION['GUESSES'][$guess['guess_id']]))
            {
                echo $_SESSION['GUESSES'][$guess['guess_id']];
            }
             ?></p>
            <?php if(!isset($_SESSION['GUESSES'][$guess['guess_id']])) :?>
            <input type = 'hidden' name = 'id' value=<?php echo strval($guess['guess_id']) ?>>
            <div class="attempt-field"><input type = 'text' name = 'attempt' placeholder ='Qui suis je ?'>
            <input type = 'submit' value='▲'></div>
            <?php endif; ?>
        </form>
            <?php 
            $i++;
            endforeach ?>
    </div>

   <article class="main-text-section">         
        <div class="title">
                    <p>A propos de moi...</p>
                    <h2>Pouvez-vous deviner ?</h2>
                </div>
                <p id="help-message"><?php echo $guesses[0]['help_message']  ?></p>
                <p id="hint-message"></p>
                <div class="slider-buttons">
                    <img class="button-left" src="public/assets/img/fi_arrow-right.svg">
                    <img class="button-right" src="public/assets/img/fi_arrow-right.svg">
                    
            </article>
        </section>
        <script src="public/scripts/guess-words.js" defer></script>
