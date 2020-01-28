<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymor\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable
{
    use Notifiable;

    protected $table = 'Usuario';
    protected $primaryKey = 'ID_usuario';

    protected $fillable = [
        'ID_usuario', 'nickname', 'correo','ID_persona'
    ];

    protected $hidden = [
        'clave', 'remember_token',
    ];

    public function getJWTIdentifier(){
        return $this->getKey();
    }

    public function getJWTCustomClaims(){
        return [];
    }

    public function getAuthPassword()
    {
      return $this->clave;
    }

}
