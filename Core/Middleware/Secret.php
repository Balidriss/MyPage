<?php

namespace Core\Middleware;

use Core\Session;

class Secret
{


    public function handle()
    {
        if (!Session::secret()) {
            redirect('/submited');
        }
    }
}
