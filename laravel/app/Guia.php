<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Guia extends Model {
    protected $table = 'Guia';
    protected $primaryKey = 'ID_usuario';

    public $timestamps = false;

    protected $fillable = [
        'f_ingreso', 'estado', 'certificado', 'ID_usuario', 'descripcion', 'motivo', 'titulo', 'feedback', 'ID_zona'
    ];

    public function usuario () {
        return $this->belongsTo( User::class, 'ID_usuario', 'ID_usuario' );
    }

    public function persona () {
        return $this->hasOneThrough(Persona::class, User::class, 'ID_usuario', 'ID_persona', 'ID_usuario', 'ID_usuario');
    }
}