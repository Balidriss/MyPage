<?php

namespace Core\Middleware;

use Core\Session;

class Admin
{
    public function handle()
    {
        if (!Session::isAdmin()) {
            redirect('/');
        }
    }
}
