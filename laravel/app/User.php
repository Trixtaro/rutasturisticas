<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $table = 'Usuario';
    protected $primaryKey = 'ID_usuario';

    public $timestamps = false;

    protected $fillable = [
        'ID_usuario', 'nickname', 'correo','ID_persona','clave'
    ];

    protected $hidden = [
        'clave', 'remember_token',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function getAuthPassword(){
        return $this->clave;
    }

}
