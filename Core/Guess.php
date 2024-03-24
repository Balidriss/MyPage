<?php

namespace Core;

class Guess
{
    public $id;
    public $answer = '';
    public $helpMessage = '';
    public $hintMessage = '';
    public $attempt = 0;
    public $success = false;

    public function __construct($id)
    {
        $this->id = $id;
        $guess = $this->get($id);
        $this->answer = $guess['answer'];
        $this->helpMessage = $guess['help_message'];
        $this->hintMessage = $guess['hint_message'];
    }
    public function get($id)
    {
        //get guess from db
    }

    public function attempt($userAtempt, $answer)
    {
        return $userAtempt === $answer;
    }

    public function store($id)
    {
        //store user progress
    }
    public function clear($id)
    {
        //clear user progress
    }
    public function success($id)
    {
        //send success message
    }

    public function fail($id)
    {
        //send hint message
    }
}
