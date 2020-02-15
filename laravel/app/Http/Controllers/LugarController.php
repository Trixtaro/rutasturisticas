<?php

namespace App\Http\Controllers;

use App\Lugar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\LugarResource;
use App\Http\Resources\LugarResource2;
use Illuminate\Support\Facades\Validator;

class LugarController extends Controller {

    public function index()
    {
        
    }

    public function create()
    {
        //
    }

    public function store (Request $request) {
        $validator = Validator::make($request->json()->all() ,[
            'nombre' => 'required|between:2,255',
            'descripcion' => 'required|between:2,255',
            'altura_sobre_nivel_del_mar' => 'required|digits_between:1,50000',
            'latitud' => 'required|max:20',
            'longitud' => 'required|max:20',
            'imagen' => 'required',
            'ID_zona' => 'required|exists:zona,ID_zona',
        ]);
        
        if( $validator->fails() ){
            return response()->json([
                'data' => null,
                'error' => 'Error en validar datos',
                'message' => $validator->messages(),
                'success' => false 
            ], 400);
        }
        $lugar = new Lugar();
        $lugar->nombre = $request->json()->get('nombre');
        $lugar->descripcion = $request->json()->get('descripcion');
        $lugar->altura_sobre_nivel_del_mar = $request->json()->get('cargo');
        $lugar->latitud = $request->json()->get('latitud');
        $lugar->longitud = $request->json()->get('longitud');
        $lugar->URL_img = $request->json()->get('imagen');
        $lugar->ID_zona = $request->json()->get('ID_zona');
        $lugar->save();

        return response()->json(compact('lugar',201));
    }

    public function show($id_lugar)
    {
        $lugar = DB::select(DB::raw('CALL CARGAR_LUGAR('.$id_lugar.')'))[0];

        return [
            'id' => $lugar->ID_lugar,
            'nombre' => $lugar->nombre,
            'descripcion' => $lugar->descripcion,
            'latitud' => $lugar->latitud,
            'longitud' => $lugar->longitud,
            'imagen' => $lugar->URL_img
        ];
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }

    public function search($id_lugar){
        $lugares = DB::select(DB::raw('CALL BUSCAR_LUGARES('.$id_lugar.')'));
        return LugarResource2::collection(collect($lugares));
    }
}
