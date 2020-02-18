<?php

namespace App\Http\Controllers;

use App\User;
use App\Usuario;
use App\Persona;
use App\Turista;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

use JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class CustomAuthController extends Controller {
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

        DB::beginTransaction();

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
            'clave' => Hash::make($request->json()->get('clave')),
            'correo' => $request->json()->get('correo'),
            'ID_persona' => $persona->ID_persona
        ]);
        $now = new \DateTime();
        $ahora = $now->format('Y-m-d H:i:s');
        $turista = Turista::create([
            'f_ingreso' => $ahora,
            'ID_usuario' => $usuario->ID_usuario
        ]);

        $token = JWTAuth::fromUser($usuario);

        DB::commit();
        
        return response()->json(compact('usuario','token','turista',201));
    }

    public function login (Request $request) {
        
        $credentials = $request->json()->all();

        // $credentials = $request->only('nickname','password');

        // return $credentials;

        try{
            if(! $token = JWTAuth::attempt($credentials)){
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch(JWTException $e){
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json(compact('token'));

    }

    public function getAuthenticatedUser (Request $request) {
        try {
            if (!$usuario = JWTAuth::parseToken()->authenticate() ){
                return response()->json(['user_not_found'], 404);
            }
        } catch (TokenExpiredException $e) {
            return response()->json(['token_expired'], 401);

        } catch (TokenInvalidException $e) {
            return response()->json(['token_invalid'], 401);

        } catch (JWTException $e) {
            return response()->json(['token_absent'], 401);
        }

        $persona = Persona::where('ID_persona',$usuario->ID_persona)->first();

        if ( $persona->cedula === '1351824071' ) {
            return response()->json([
                'usuario' => $usuario,
                'persona' => $persona,
                'admin' => true
            ]);
        } else {
            return response()->json([
                'usuario' => $usuario,
                'persona' => $persona,
                'admin' => false
            ]);
        }
    }
}