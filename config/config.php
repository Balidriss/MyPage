<?php
try {
require_once __ROOT__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__, 'ib.env');
$dotenv->load();
} catch (\Dotenv\Exception\InvalidFileException $e) {
    die('Error loading .env file: ' . $e->getMessage());
}

