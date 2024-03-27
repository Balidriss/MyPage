<?php

namespace Core;

use DateTime;

class CV
{
    public $formations;
    public $professions;
    public $projects;

    public function __construct()
    {
        $this->formations = $this->formations();
        $this->professions = $this->professions();
        $this->projects = $this->projects();
    }

    public function formations()
    {

        return App::resolve(Database::class)->query("SELECT * FROM formations ORDER BY date_end DESC;")->get();
    }
    public function professions()
    {

        return App::resolve(Database::class)->query("SELECT * FROM professions ORDER BY date_end DESC;")->get();
    }
    public function projects()
    {

        return App::resolve(Database::class)->query("SELECT * FROM works ORDER BY date_end DESC;")->get();
    }
}
