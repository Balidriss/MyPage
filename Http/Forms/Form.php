<?php

namespace Http\Forms;

use Core\Validator;
use Core\ValidationException;


class Form
{
    protected $errors = [];

    public function __construct(public array $attributes)
    {
        if (!Validator::email($attributes['email'])) {
            $this->errors['email'] = 'Une adresse mail valide est nécessaire.';
        }
        if (!Validator::string($attributes['subject'], 1, 100)) {
            $this->errors['subject'] = 'Un objet est nécessaire.';
        }
        if (!Validator::string($attributes['body'], 1, 10000)) {
            $this->errors['body'] = 'Un message de moins de 10 000 caractères est nécessaire.';
        }
        if (!Validator::bool($attributes['consent'])) {
            $this->errors['consent'] = "Afin de traiter votre demande, le consentement est requis pour soumettre le formulaire.";
        }
    }

    public static function validate($attributes)
    {
        $instance = new static($attributes);
        return $instance->failed() ? $instance->throw() : $instance;
    }

    public function throw()
    {
        ValidationException::throw($this->errors(), $this->attributes);
    }

    public function errors()
    {
        return $this->errors;
    }

    public function error($field, $message)
    {
        $this->errors[$field] = $message;
        return $this;
    }
    public function failed()
    {
        return count($this->errors);
    }
}
