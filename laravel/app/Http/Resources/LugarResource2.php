<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LugarResource2 extends JsonResource
{

    public function toArray($request)
    {
        return [
            'latitud' => $this->latitud,
            'longitud' => $this->longitud,
            'nombre' => $this->nombre,
            'cargo' => $this->cargo
        ]; 
    }
}
