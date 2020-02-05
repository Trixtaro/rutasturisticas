<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\LugarResource;
use App\Http\Resources\LugarResource2;

class LugarController extends Controller
{

    public function index()
    {
        
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
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
