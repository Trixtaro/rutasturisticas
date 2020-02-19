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
}