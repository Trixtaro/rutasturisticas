<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LugarResource extends JsonResource
{

    public function toArray($request)
    {
        $lugar = 'Nombre del lugar';
        $administrativo_superior = 'Nivel Administrativo Superior';

        return [
            'Lugar' => $this->$lugar,
            'nivel_superior' => $this->$administrativo_superior
        ];
    }
}
