<?php
session_start();
require_once(__DIR__ . '/config/dbconnect.php');


header('Content-Type: application/json');

if(isset($_POST['id'])){
$guessId = $_POST['id'];
}
if(isset($_POST['attempt'])){
    $guessAttempt = $_POST['attempt'];
    }


try {

    $guessStatement = $mysqlClient->prepare('SELECT answer, hint_message, success_message FROM guesses WHERE guess_id = :id');
    $guessStatement->execute(['id' => (int)$guessId,]);
    $currentGuessAttempt = $guessStatement->fetch(PDO::FETCH_ASSOC);
    if ($currentGuessAttempt)
    {
        $response = ['hint_message' => $currentGuessAttempt['hint_message']];
       
        if (isset($guessAttempt) &&  $guessAttempt === $currentGuessAttempt['answer'])
{
    $response['success_message'] = $currentGuessAttempt['success_message'];
    $response['answer'] = $currentGuessAttempt['answer'];
    $_SESSION['GUESSES'][(int)$guessId] = $response['answer'];
}
    }

echo json_encode($response);
}
catch (PDOException $e) {
     http_response_code(500); // Internal Server Error
    echo json_encode(['error' => $e->getMessage()]);
}
