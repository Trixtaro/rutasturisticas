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
        $zonas = DB::select(DB::raw('CALL MOSTRAR_ZONAS()'));
        return LugarResource::collection(collect($zonas));
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
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
