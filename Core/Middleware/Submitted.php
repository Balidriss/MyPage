<?php

namespace Core\Middleware;

use Core\Session;

class Submitted
{


    public function handle()
    {
        if (!Session::get('submitted')) {
            redirect('/');
        }
    }
}
