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

    public function find($index)
    {
        return $this->quiz[$index]['guess_id'];
    }
    public function clear()
    {
        $_SESSION['quiz'] = [];
    }

    public function store($index)
    {
        $_SESSION['quiz'][$index] = $this->quiz->find($index);
    }
}
