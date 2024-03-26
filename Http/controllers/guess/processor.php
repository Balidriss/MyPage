<?php
$userAttempt = $_POST['attempt'];
$index = $_POST['index'];
$time = 1;


if (timePassed('processor', time()) >= $time ?? true) {
    storeTime('processor');
} else {

    echo json_encode(['error' => "too fast"]);
    exit();
}

if (!isset($index) || !isset($userAttempt)) {

    echo json_encode(['error' => 'missing $_POST']);
    exit();
}
$guess = Core\App::resolve(Core\Quiz::class)->find($index);

if ($guess->attempt($userAttempt)) {
    $response = $guess->success();
} else {
    $response = $guess->fail();
}

echo json_encode($response);
