<?php

use Http\Forms\Form;
use Core\Contact;
use Core\Session;

$body = $_POST['body'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$consent = isset($_POST['consent']);
Form::validate($attributes = ['email' => $email, 'subject' => $subject, 'body' => $body, 'consent' => $consent]);

(new Contact())->store($email, $subject, $body);
Session::formSubmission();
redirect('/submitted');
