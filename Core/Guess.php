<?php

namespace Core;

class Guess
{
    public $id;
    public $answer = '';
    public $helpMessage = '';
    public $hintMessage = '';
    public $successMessage = '';
    public $attempt = 0;
    public $success = false;

    public function __construct($guess)
    {

        $this->id = $guess['guess_id'];
        $this->answer = $guess['answer'];
        $this->helpMessage = $guess['help_message'];
        $this->hintMessage = $guess['hint_message'];
        $this->successMessage = $guess['success_message'];
    }

    public function attempt($userAtempt, $answer)
    {
        return $userAtempt === $answer;
    }
    public function success()
    {
        $this->success = true;
        return ['additional_message' => $this->successMessage, 'answer' => $this->answer];
    }

    public function fail()
    {
        $this->attempt++;
        return ['additional_message' => $this->hintMessage];
    }
}
