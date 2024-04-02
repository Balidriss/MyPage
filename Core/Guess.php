<?php

namespace Core;



class Guess
{
    public $id;
    public $what = '';
    public $answer = '';
    public $helpMessage = '';
    public $hintMessage = '';
    public $successMessage = '';
    public $success = false;
    public $attempt = 0;

    public function __construct($guess)
    {
        $this->id = $guess['guess_id'];
        $this->what = $guess['what'];
        $this->answer = $guess['answer'];
        $this->helpMessage = $guess['help_message'];
        $this->hintMessage = $guess['hint_message'];
        $this->successMessage = $guess['success_message'];
        $this->attempt = $this->load('attempt') ?? $this->save('attempt', 0);
        $this->success = $this->load('success') ?? $this->save('success', false);
    }

    public function clear()
    {
        $_SESSION['quiz'][$this->id] = null;
    }

    public function store($guess)
    {
        $_SESSION['quiz'][$this->id] = $guess;
    }

    public function load($key)
    {
        return Session::get('quiz')[$this->id][$key] ?? null;
    }
    public function save($key, $value)
    {
        $_SESSION['quiz'][$this->id][$key] = $value;
    }

    public function attempt($userAtempt)
    {
        return $userAtempt === $this->answer;
    }
    public function success()
    {
        $guessData = [
            'id' => $this->id,
            'what' => $this->what,
            'answer' => $this->answer,
            'help_message' => $this->helpMessage,
            'hint_message' => $this->hintMessage,
            'success_message' => $this->successMessage,
            'success' => true,
            'attempt' => $this->attempt,

        ];

        // Store the array in the session
        $this->store($guessData);
        return ['success_message' => $this->successMessage, 'answer' => $this->answer];
    }

    public function fail()
    {
        $this->save('attempt', $this->load('attempt') + 1);
        Session::put('total_attempts', (Session::get('total_attempts') + 1) ?? 1);
        return ['hint_message' => $this->hintMessage];
    }
}
