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
            $this->errors['email'] = 'Please provice a valid email address.';
        }
        if (!Validator::string($attributes['subject'], 1, 100)) {
            $this->errors['subject'] = 'A subject is required with less than 100 characters.';
        }
        if (!Validator::string($attributes['body'], 1, 10000)) {
            $this->errors['body'] = 'A body is required with less than 10000 characters.';
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
