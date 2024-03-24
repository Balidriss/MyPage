<?php

use Core\Container;
use Core\App;

$container = new Container();

$container->bind('Core\Database', function () {

    $config = require base_path('Env.php');
    $dbConfig = $config['database'];
    return new Core\Database($dbConfig['dsn'], $dbConfig['user'], $dbConfig['password']);
});

$container->bind('Core\Quiz', function () {
    return new Core\Quiz();
});

$container->resolve('Core\Database');
App::setContainer($container);
$container->resolve('Core\Quiz');
App::setContainer($container);
