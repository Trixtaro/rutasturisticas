<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    protected $table = 'Persona';
    protected $primaryKey = 'ID_persona';

    public $timestamps = false;

    public function usuarios () {
        return $this->hasMany(User::class, 'ID_persona', 'ID_persona');
    }
}
