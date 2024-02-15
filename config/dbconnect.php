<?php
require_once (__DIR__ . '/config.php');
if(!($isProd === 'TRUE'))
{
    $dbPsw="";
}
else
{
   // $dbPsw={securedpassword};
}

try {
    mysqli_report(MYSQLI_REPORT_ALL);
    $mysqlClient = new PDO(
        sprintf('mysql:host=%s;dbname=%s;port=%s;charset=utf8',  $dbHost, $dbName,  $dbPort),
        $dbUser,
        $dbPsw
    );
    $mysqlClient->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $exception) {
    die('Erreur : ' . $exception->getMessage());
}
