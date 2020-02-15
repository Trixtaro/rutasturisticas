<?php

namespace App\Http\Controllers;

use App\Zona;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\LugarResource;
use Illuminate\Support\Facades\Validator;

class ZonaController extends Controller {

    public function index () {
        $zonas = DB::select(DB::raw('CALL MOSTRAR_ZONAS()'));
        return LugarResource::collection(collect($zonas));
    }

    public function create () {
        //
    }

    public function store (Request $request) {
        $validator = Validator::make($request->json()->all() ,[
            'latitud' => 'required|max:10',
            'longitud' => 'required|max:10',
            'nombre' => 'required|between:2,50',
            'cargo' => 'required',
            'descripcion' => 'required|between:2,255',
        ], [
            //Para latitud
            'latitud.required' => '¡Necesitamos saber la :attribute!',
            'latitud.max' => '¡No puedes pasarte de :max caracteres!',
            //Para longitud
            'longitud.required' => '¡Necesitamos saber la :attribute!',
            'longitud.max' => '¡No puedes pasarte de :max caracteres!',
            //Para nombre
            'nombre.required' => '¡Necesitamos saber el :attribute!',
            'nombre.between' => '¡Te pasaste del rango entre :min - :max!',
            //Para cargo
            'cargo.required' => '¡Necesitamos saber el :attribute!',
            //Para descripción
            'descripcion.required' => '¡Necesitamos saber la descripción!',
            'descripcion.between' => '¡Te pasaste del rango entre :min - :max!',
        ]);
        
        if( $validator->fails() ){
            return response()->json([
                'data' => null,
                'error' => 'Error en validar datos',
                'message' => $validator->messages(),
                'success' => false 
            ]);
        }
        
        $now = new \DateTime();
        $ahora = $now->format('Y-m-d H:i:s');
        $zona = new Zona();
        $zona->latitud = $request->json()->get('latitud');
        $zona->longitud = $request->json()->get('longitud');
        $zona->nombre = $request->json()->get('nombre');
        $zona->cargo = $request->json()->get('cargo');
        $zona->descripcion = $request->json()->get('descripcion');
        $zona->f_ingreso = $ahora;
        $zona->save();

        return response()->json([
            'success' => true,
            'message'=> 'Se agrego con éxito',
            'data' => [
                'zona' => $zona
            ]
        ],201);
    }

    public function show ($id_lugar) {
        //
    }

    public function edit ($id) {
        //
    }

    public function update (Request $request, $id) {
        //
    }

    public function destroy ($id) {
        //
    }

    public function search ($id_lugar) {
        //
    }
}
