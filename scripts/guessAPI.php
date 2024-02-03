<?php

$guessesStatement = $mysqlClient->prepare('SELECT * FROM guesses');
$guessesStatement->execute();
$guesses = $guessesStatement->fetchAll();
$guessesJson = json_encode($guesses);
?>