<?php

namespace Core;


class Quiz
{
    public $totalAttempts = 0;
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
    public function clear()
    {
        $_SESSION['quiz'] = [];
    }

    public function store($index)
    {
        $_SESSION['quiz'][$index] = $this->find($index);
    }
}
