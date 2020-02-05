<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lugar extends Model {
    protected $table = 'Lugar';
    protected $primaryKey = 'ID_lugar';
    public $timestamps = false;
}