<?php
require_once __DIR__ . '/config.php';
try {
    $mysqlClient = new PDO(
        sprintf('mysql:host=%s;dbname=%s;port=%s;charset=utf8',  $_ENV['MYSQL_HOST'], $_ENV['MYSQL_NAME'],  $_ENV['MYSQL_PORT']),
        $_ENV['MYSQL_USER'],
        $_ENV['MYSQL_PASSWORD']
    );
    $mysqlClient->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $exception) {
    die('Erreur : ' . $exception->getMessage());
}
