<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'Usuario';
    protected $primaryKey = 'ID_usuario';

    public $timestamps = false;
}
