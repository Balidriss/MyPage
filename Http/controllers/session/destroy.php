<?php

use Core\Session;

Session::flush();
session_destroy();
$params = session_get_cookie_params();
setcookie('PHPSESSID', '', time() - 9999, $params['path'], $params['domain'], $params['secure'], $params['httponly']);

redirect($router->previousUrl());
