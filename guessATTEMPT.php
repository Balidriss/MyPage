<?php
session_start();
require_once(__DIR__ . '/config/dbconnect.php');


    if (isset($_POST['id'])) {
        $guessId = $_POST['id'];
    }

    if (isset($_POST['attempt'])) {
        $guessAttempt = $_POST['attempt'];
   }
    try {
        $guessResultStatement = $mysqlClient->prepare('SELECT answer, hint_message, success_message FROM guesses WHERE guess_id = :id');
        $guessResultStatement->execute(['id' => (int)$guessId]);
        $currentGuessAttempt = $guessResultStatement->fetch(PDO::FETCH_ASSOC);

        if ($currentGuessAttempt) {
            $response = ['additional_message' => $currentGuessAttempt['hint_message']];

            if ($guessAttempt === $currentGuessAttempt['answer']) {
                $response['additional_message'] = $currentGuessAttempt['success_message'];
                $response['answer'] = $currentGuessAttempt['answer'];
                $_SESSION['GUESSES'][(int)$guessId]['answer'] = $response['answer'];
                $_SESSION['GUESSES'][(int)$guessId]['additional_message'] = $response['additional_message'];
            }
        }

        echo json_encode($response);
    } catch (PDOException $e) {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => $e->getMessage()]);
    }

?>
