<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LugarResource2 extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->ID_lugar,
            'nombre' => $this->nombre,
            'descripcion' => $this->descripcion,
            'foto' => $this->URL_img
        ]; 
    }
}
