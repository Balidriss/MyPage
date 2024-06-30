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
function remove_accent($text)
{
    $accents = [
        'Š' => 'S', 'š' => 's', 'Đ' => 'Dj', 'đ' => 'dj', 'Ž' => 'Z', 'ž' => 'z', 'Č' => 'C', 'č' => 'c', 'Ć' => 'C', 'ć' => 'c',
        'À' => 'A', 'Á' => 'A', 'Â' => 'A', 'Ã' => 'A', 'Ä' => 'A', 'Å' => 'A', 'Æ' => 'A', 'Ç' => 'C', 'È' => 'E', 'É' => 'E',
        'Ê' => 'E', 'Ë' => 'E', 'Ì' => 'I', 'Í' => 'I', 'Î' => 'I', 'Ï' => 'I', 'Ñ' => 'N', 'Ò' => 'O', 'Ó' => 'O', 'Ô' => 'O',
        'Õ' => 'O', 'Ö' => 'O', 'Ø' => 'O', 'Ù' => 'U', 'Ú' => 'U', 'Û' => 'U', 'Ü' => 'U', 'Ý' => 'Y', 'Þ' => 'B', 'ß' => 'Ss',
        'à' => 'a', 'á' => 'a', 'â' => 'a', 'ã' => 'a', 'ä' => 'a', 'å' => 'a', 'æ' => 'a', 'ç' => 'c', 'è' => 'e', 'é' => 'e',
        'ê' => 'e', 'ë' => 'e', 'ì' => 'i', 'í' => 'i', 'î' => 'i', 'ï' => 'i', 'ð' => 'o', 'ñ' => 'n', 'ò' => 'o', 'ó' => 'o',
        'ô' => 'o', 'õ' => 'o', 'ö' => 'o', 'ø' => 'o', 'ù' => 'u', 'ú' => 'u', 'û' => 'u', 'ü' => 'u', 'ý' => 'y', 'þ' => 'b', 'ÿ' => 'y'
    ];
    return strtr($text, $accents);
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

function dateFormat($object, $isTab = false)
{
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

    $dates = ['date_end' => $object['date_end'], 'date_start' => $object['date_start']];
    $part = [];
    foreach ($dates as $index => $date) {
        $date = DateTime::createFromFormat('Y-m-d', $date);
        $month = $date->format('F');
        $year = $date->format('Y');
        $month = $monthTranslations[$month];

        if ($isTab) {
            if ($year > date('Y')) {
                return null;
            } else {
                return '<strong>' . $month . '</strong></br>' . $year;
            }
        } else {

            if ($year < 2020 && $year > 2014) {
                $part[$index] = 'Intérim';
            } else if ($year > date('Y')) {
                $part[$index] = 'Actuellement';
            } else {
                $part[$index] = $month . ' ' . $year . ' ';
            }
        }
    }
    $result = $part['date_end'] === $part['date_start'] ? $part["date_end"] : $part["date_end"] . ' - ' . $part["date_start"];
    return $result;
}
