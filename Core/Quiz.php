<?php

namespace Core;


class Quiz
{
    public $totalAttempts = 0;
    public $quiz;
    public $delay = 3;

    public function __construct()
    {
        $this->quiz = App::resolve(Database::class)->query('select * from guesses')->get();
    }
}
