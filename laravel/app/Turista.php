<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Turista extends Model {
    protected $table = 'turista';
    protected $primaryKey = 'ID_usuario';

    public $timestamps = false;

    protected $fillable = [
        'f_ingreso', 'ID_usuario'
    ];

    public function usuario () {
        return $this->belongsTo(Turista::class);
    }
}
