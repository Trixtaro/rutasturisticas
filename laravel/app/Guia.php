<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Guia extends Model {
    protected $table = 'guia';
    protected $primaryKey = 'ID_usuario';

    public $timestamps = false;

    protected $fillable = [
        'f_ingreso', 'estado', 'foto_identificacion', 'certificado', 'ID_usuario'
    ];

    public function usuario () {
        return $this->belongsTo(Guia::class);
    }
}