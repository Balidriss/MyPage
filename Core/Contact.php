<?php

namespace Core;

use Core\App;
use Core\Database;

class Contact
{
    public function store($email, $subject, $body)
    {

        App::resolve(Database::class)->query('INSERT INTO messages(email,subject, body) VALUES(:email,:subject,:body)', [
            'email' => $email,
            'subject' => $subject,
            'body' =>
            $body
        ]);
    }
}
