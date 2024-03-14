<?php

namespace Core;

class Session
{
    public static function has($key)
    {
        return (bool) static::get($key);
    }
    public static function put($key, $value)
    {
        $_SESSION[$key] = $value;
    }

    public static function get($key, $default = null)
    {
        return $_SESSION['_flash'][$key] ?? $_SESSION[$key] ?? $default;
    }
    public static function flash($key, $value)
    {
        return $_SESSION['_flash'][$key] = $value;
    }
    public static function unflash()
    {
        unset($_SESSION['_flash']);
    }
    public static function flush()
    {
        $_SESSION = [];
    }
    public static function formSubmission($i)
    {
        static::flash('submitted', true);
        switch ($i) {
            case 0:
                static::put('user', ['admin' => true]);
                break;
            case 1:
                static::flash('user', ['secret' => true]);
                break;
            default:
                break;
        }
    }
    public static function isAdmin()
    {
        return static::get('user')['admin'] === true;
    }
    public static function secret()
    {
        return static::get('user')['secret'] === true;
    }

    public static function destroy()
    {
        Session::flush();
        session_destroy();
        $params = session_get_cookie_params();
        setcookie('PHPSESSID', '', time() - 9999, $params['path'], $params['domain'], $params['secure'], $params['httponly']);
    }
}
