<?php

namespace App\Http\Controllers;

use App\Guia;
use Illuminate\Http\Request;

class GuiaController extends Controller {
    public function store (Request $request) {
        $now = new \DateTime();
        $ahora = $now->format('Y-m-d H:i:s');
        $guia = new Guia();
        $guia->f_ingreso = $ahora;
        $guia->save();
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