<?php

$router->get('/', 'index.php');
$router->get('/travaux', 'work.php');
$router->get('/blog', 'blog.php');

$router->get('/contact', 'contact/create.php');
$router->post('/contact', 'contact/store.php');
$router->get('/submitted', 'contact/success.php')->only('submitted');

//quiz
$router->post('/attempt', 'guess/processor.php');

$router->get('/clear', 'session/destroy.php');
