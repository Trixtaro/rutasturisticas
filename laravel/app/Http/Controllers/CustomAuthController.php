<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomAuthController extends Controller
{
    public function registrarUsuario(Request $request){
        return ['Exito'];
    }

    public function loguearUsuario(Request $request){
        
    }
}
