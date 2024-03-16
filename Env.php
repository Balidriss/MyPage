<?php

$dbHost = getenv('MYSQL_HOST') ?? 'localhost';
$dbPort = getenv('MYSQL_PORT') ?? 3306;
$dbName = getenv('MYSQL_NAME') ?? 'ib_page';
$dbUser = getenv('MYSQL_USER') ?? 'root';
$dbPsw = getenv('MYSQL_PASSWORD') ?? '';
$isProd = getenv('PRODUCTION') ?? FALSE;
return [
    'database' => [
        'dsn' => [
            'host' => $dbHost,
            'port' => $dbPort,
            'dbname' => $dbName,
            'charset' => 'utf8mb4'
        ],
        'user' => $dbUser,
        'password' => $dbPsw,
    ],
    'isProd' => $isProd
];
