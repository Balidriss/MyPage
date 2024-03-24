<?php

namespace Core;

use Core\Session;

class Quiz
{
    public $quiz = [];
    public $delay = 3;
    public function __construct()
    {
        $guesses = App::resolve(Database::class)->query('select * from guesses')->get();
        foreach ($guesses as $index => $g) {
            $this->quiz[$index] = new Guess($g);
        }
    }

    public function find($index)
    {
        return $this->quiz[$index];
    }
}
