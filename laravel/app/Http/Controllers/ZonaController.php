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
            'latitud' => 'required',
            'longitud' => 'required',
            'nombre' => 'required',
            'cargo' => 'required',
            'descripcion' => 'required',
        ]);
        
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
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

        return response()->json(compact('zona',201));
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