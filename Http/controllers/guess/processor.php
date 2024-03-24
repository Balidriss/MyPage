<?php
$userAttempt = $_POST['attempt'];
$index = $_POST['index'];

$guess = Core\App::resolve(Core\Quiz::class)->find($index);

if ($guess->attempt($userAttempt)) {
    $response = $guess->success();
} else {
    $response = $guess->fail();
}

echo json_encode($response);
