<?php

$router->get('/', 'index.php');
$router->get('/work', 'work.php');
$router->get('/blog', 'blog.php');

$router->get('/contact', 'contact/create.php');
$router->post('/contact', 'contact/store.php');
$router->get('/submited', 'contact/success.php')->only('submited');
$router->get('/submited', 'secret.php')->only('secret');

//admin
$router->get('/dashboard', 'admin/dashboard.php')->only('admin');
$router->get('/clear', 'session/destroy.php')->only('admin');
