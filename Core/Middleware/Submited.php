<?php

namespace Core\Middleware;

use Core\Session;

class Submited
{


    public function handle()
    {
        if (!Session::get('submited')) {
            redirect('/');
        }
    }
}
