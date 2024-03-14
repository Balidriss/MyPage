<?php

namespace Core;

use Core\App;
use Core\Database;

class Contact
{
    public function store($email, $subject, $body)
    {
        $response = App::resolve(Database::class)->query('SELECT id FROM messages WHERE email = :email AND subject = :subject AND body = :body', ['email' => $email, 'subject' => $subject, 'body' => $body])->find();
        if ($response && $response > 1) {
            App::resolve(Database::class)->query('INSERT INTO messages(email,subject, message) VALUES(:email,:subject,:body)', [
                'email' => $email,
                'subject' => $subject,
                'body' =>
                $body
            ]);
        }
        return $response;
    }
}
