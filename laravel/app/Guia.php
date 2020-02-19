<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Guia extends Model {
    protected $table = 'Guia';

    public $timestamps = false;

    protected $fillable = [
        'f_ingreso', 'estado', 'foto_identificacion', 'certificado', 'ID_usuario'
    ];

    public function usuario () {
        return $this->belongsTo( User::class, 'ID_usuario', 'ID_usuario' );
    }

    public function persona () {
        return $this->hasOneThrough(Persona::class, User::class, 'ID_usuario', 'ID_persona', 'ID_usuario', 'ID_usuario');
    }
}