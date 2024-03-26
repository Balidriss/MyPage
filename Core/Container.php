<?php

namespace Core;

class Container
{
    protected $bindings = [];
    protected $instances = [];

    public function bind($key, $func)
    {
        $this->bindings[$key] = $func;
    }

    public function resolve($key)
    {
        if (!array_key_exists($key, $this->bindings)) {
            throw new \Exception("No matching binding found for {$key}");
        }

        if (!array_key_exists($key, $this->instances)) {
            $func = $this->bindings[$key];
            $this->instances[$key] = call_user_func($func);
        }

        return $this->instances[$key];
    }
}
