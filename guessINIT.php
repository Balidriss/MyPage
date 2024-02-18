<?php
session_start();
require_once(__DIR__ . '/config/dbconnect.php');
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['id'])) {
    $guessId = $data['id'];
}


    try {
        $guessInitStatement = $mysqlClient->prepare('SELECT help_message FROM guesses WHERE guess_id = :id');
        $guessInitStatement->execute(['id' => (int)$guessId]);
        $newGuess = $guessInitStatement->fetch(PDO::FETCH_ASSOC);
        if ($newGuess) {
            $response = ['help_message' => $newGuess['help_message']];
            $_SESSION['GUESSES'][(int)$guessId]['help_message'] = $newGuess['help_message'];
        }
        echo json_encode($response);
    } catch (PDOException $e) {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => $e->getMessage()]);
    }


?>
