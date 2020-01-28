<?php

namespace App\Http\Controllers;

use App\User;
use App\Usuario;
use App\Persona;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;

class CustomAuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->json()->all() ,[
            'nickname' => 'required|unique:Usuario',
            'correo' => 'required|unique:Usuario',
            'nombres' => 'required',
            'apellido_paterno' => 'required',
            'apellido_materno' => 'required',
            'f_nacimiento' => 'required',
            'cedula' => 'required|unique:Persona',
            'pasaporte' => '',
            'nacionalidad' => 'required',
            'genero' => 'required'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $persona = new Persona();
        $persona->nombres = $request->json()->get('nombres');
        $persona->apellido_paterno = $request->json()->get('apellido_paterno');
        $persona->apellido_materno = $request->json()->get('apellido_materno');
        $persona->f_nacimiento = $request->json()->get('f_nacimiento');
        $persona->cedula = $request->json()->get('cedula');
        $persona->pasaporte = $request->json()->get('pasaporte');
        $persona->nacionalidad = $request->json()->get('nacionalidad');
        $persona->genero = $request->json()->get('genero');
        $persona->save();

        $usuario = User::create([
            'nickname' => $request->json()->get('nickname'),
            'correo' => $request->json()->get('correo'),
            'clave' => Hash::make($request->json()->get('nickname')),
            'ID_persona' => $persona->ID_persona
        ]);

        $token = JWTAuth::fromUser($usuario);

        return response()->json(compact('usuario','token',201));
    }

}
