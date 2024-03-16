<?php

use Http\Forms\Form;
use Core\Contact;
use Core\Session;

$body = $_POST['body'];
$subject = $_POST['subject'];
$email = $_POST['email'];

Form::validate($attributes = ['email' => $email, 'subject' => $subject, 'body' => $body]);

$i = (new Contact())->store($email, $subject, $body);

Session::formSubmission($i);
redirect('/submited');
