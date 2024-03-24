<?php

namespace Core;

class Guess
{
    static $totalAttempts = 0;

    public $id;
    public $answer = '';
    public $helpMessage = '';
    public $hintMessage = '';
    public $attempt = 0;
    public $success = false;

    public function __construct($id)
    {
        $this->id = $id;
    }
    public function get($id)
    {
        //get guess from db
    }

    public function attempt($userAtempt, $answer)
    {
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
