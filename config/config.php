<?php
$dbHost = getenv('MYSQL_HOST');
$dbPort = getenv('MYSQL_PORT');
$dbName = getenv('MYSQL_NAME');
$dbUser = getenv('MYSQL_USER');
// $dbPsw = getenv('MYSQL_PASSWORD');
$isProd = getenv('PRODUCTION');

$apiKey = getenv('PRIVATE_API_KEY');