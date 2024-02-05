<?php
require_once(__DIR__ . '/../../config/dbconnect.php');
require_once(__DIR__ . '/../../vendor/autoload.php'); 

header('Content-Type: application/json');

$post = json_decode(file_get_contents("php://input"), true);

$guessRequest = $post['guess'];
if(isset($post['id'])){
$guessId = $post['id'];
}

try {
switch($guessRequest){
case 'init':
    $guessesStatement = $mysqlClient->prepare('SELECT guess_id, help_message FROM guesses');
    $guessesStatement->execute();
  $response =  $guessesStatement->fetchAll();
break;
case 'attempt':
    $guessStatement = $mysqlClient->prepare('SELECT answer, hint_message, success_message FROM guesses WHERE guess_id = :id');
    $guessStatement->execute(['id' => (int)$guessId,]);
    $currentGuessAttempt = $guessStatement->fetch(PDO::FETCH_ASSOC);
    if ($currentGuessAttempt)
    {
        $response = ['hint_message' => $currentGuessAttempt['hint_message']];
       
        if (isset($post['attempt']) && $post['attempt'] === $currentGuessAttempt['answer'])
{
    $response['success_message'] = $currentGuessAttempt['success_message'];
}
    }
    break;
default:
http_response_code(400); // bad request
$response = ['error' => 'Failed to execute the query'];
}
echo json_encode($response);
}
catch (PDOException $e) {
     http_response_code(500); // Internal Server Error
    echo json_encode(['error' => $e->getMessage()]);
}

function executeRequest($response){
    if ($response) {
         
        echo json_encode($response);
    } else {
 
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to execute the query']);
    }
} 
