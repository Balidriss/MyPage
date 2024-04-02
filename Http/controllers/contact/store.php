<?php

use Http\Forms\Form;
use Core\Contact;
use Core\Session;

$body = $_POST['body'];
$subject = $_POST['subject'];
$email = $_POST['email'];

Form::validate($attributes = ['email' => $email, 'subject' => $subject, 'body' => $body]);

(new Contact())->store($email, $subject, $body);
Session::formSubmission();
redirect('/submitted');
