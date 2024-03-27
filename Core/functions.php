<?php

use Core\Session;

function dd($value)
{
    echo "<pre>";
    var_dump($value);
    echo "</pre>";

    die();
}

function urlIs($value)
{
    return $_SERVER['REQUEST_URI'] === $value;
}

function abort($code = "404")
{
    http_response_code($code);
    require base_path("views/{$code}.php");

    die();
}



function authorize($condition, $status = Core\Response::FORBIDDEN)
{

    if (!$condition) {
        abort($status);
    }
}

function base_path($path)
{
    return BASE_PATH . $path;
}

function view($path, $attributes = [])
{
    extract($attributes);

    require base_path('views/' . $path);
}

function assetPath($type, $name)
{
    return "/assets/{$type}/{$name}";
}

function redirect($path)
{
    header("location: {$path}");
    exit();
}
function old($key, $default = '')
{
    return Core\Session::get('old')[$key] ?? $default;
}
function userEmail()
{
    return $_SESSION['user']['email'] ?? null;
}

function isProd()
{
    $config = require base_path('Env.php');
    return $config['isProd'];
}

function timePassed($key, $time)
{
    return $time - ($_SESSION['time'][$key] ?? 0);
}
function storeTime($key)
{
    $_SESSION['time'][$key] = time();
}

function periodFormat($date_db, $lang = 'french')
{
    $date = DateTime::createFromFormat('Y-m-d', $date_db);

    if (!$date) {
        return "Invalid date format";
    }



    $monthTranslations = array(
        'January' => 'Janvier',
        'February' => 'Février',
        'March' => 'Mars',
        'April' => 'Avril',
        'May' => 'Mai',
        'June' => 'Juin',
        'July' => 'Juillet',
        'August' => 'Août',
        'September' => 'Septembre',
        'October' => 'Octobre',
        'November' => 'Novembre',
        'December' => 'Décembre'
    );

    $month = $date->format('F');
    $year = $date->format('Y');
    $month = $lang === 'french' ? $monthTranslations[$month] : $month;
    $result = ['month' => $month, 'year' => $year];

    return $result;
}
