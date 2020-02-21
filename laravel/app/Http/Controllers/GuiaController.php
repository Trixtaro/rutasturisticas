<?php

namespace App\Http\Controllers;

use App\Guia;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Validator;
class GuiaController extends Controller {
    public function store (Request $request) {
        $validator = Validator::make($request->json()->all() ,[
            'certificado' => 'nullable',
            'descripcion' => 'required|between:2,255',
            'motivo' => 'required|between:2,255',
            'ID_usuario' => 'required|exists:Usuario,ID_usuario',
            'identificacion' => 'nullable',
        ], [
            //Para descripción
            'descripcion.required' => '¡Necesitamos saber la descripción!',
            'descripcion.between' => '¡Te pasaste del rango entre :min - :max!',
            //Para motivo
            'motivo.required' => '¡Necesitamos saber el :attribute!',
            'motivo.between' => '¡Te pasaste del rango entre :min - :max!',
            //Para ID_usuario
            'ID_usuario.required' => '¡Necesitamos sabes el identificador del usuario!',
            'ID_usuario.exists' => '¡No encontramos este identificador en nuestras bases de datos!',
        ]);

        if ( $validator->fails() ) {
            return response()->json([
                'data' => null,
                'error' => 'Error en validar datos GuiaController@store',
                'message' => $validator->messages(),
                'success' => false 
            ], 400);
        }
        
        DB::beginTransaction();
        try {
            $now = new \DateTime();
            $ahora = $now->format('Y-m-d H:i:s');

            $certificado = $request->json()->get('certificado');
            $descripcion = $request->json()->get('descripcion');
            $motivo = $request->json()->get('motivo');
            $ID_usuario = $request->json()->get('ID_usuario');
            $identificacion = $request->json()->get('identificacion');

            $usuario = User::find($ID_usuario);
            $guia = $usuario->guias()->create([
                'f_ingreso' => $ahora,
                'motivo' => $motivo,
                'descripcion' => $descripcion,
                'certificado' => $certificado,
                'identificacion' => $identificacion,
                'estado' => 'E'
            ]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json([
                'success' => false, 
                'error' => 'Error en la transación GuiaController@store en la BD',
                'message' => $e->getMessage()
            ], 400);
        }

        return response()->json([
            'success' => true,
            'message'=> '',
            'data' => [
                'guia' => $guia
            ]
        ],201);
    }

    public function filtroEstado (Request $request, $texto) {
        if ($texto) {
            $guia = Guia::where( 'estado', '=', $texto )->get();
            return response()->json([
                'success' => true,
                'message'=> '',
                'data' => [
                    'guia' => $guia->load('usuario', 'persona')
                ]
            ],200);
        } else {
            return response()->json([
                'success' => true,
                'message'=> '',
                'data' => null
            ], 400);
        }
    }
}