<?php
require_once __DIR__ . '/../vendor/autoload.php';
try {
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__, 'ib.env');
$dotenv->load();
} catch (\Dotenv\Exception\InvalidFileException $e) {
    die('Error loading .env file: ' . $e->getMessage());
}

