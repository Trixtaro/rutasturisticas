import { LUGARES_TRAER_POR_ZONA, GUARDAR_ZONA, CARGANDO, ERROR } from "../types/lugaresTypes";

const INITIAL_STATE = {
    lugares: [],
    zona: null,
    cargando: false,
    error: '',
};

export default (state = INITIAL_STATE, action ) =>{
    switch (action.type){
        case LUGARES_TRAER_POR_ZONA:{
            return {
                ...state, 
                lugares: action.payload, 
                cargando: false
            };
        }
        case GUARDAR_ZONA:{
            return {
                ...state,
                zona: action.payload,
                cargando: false
            }
        }
        case CARGANDO:
            return { 
                ...state, 
                cargando: true
            }

        case ERROR:
            return { 
                ...state, 
                error: action.payload,
                cargando: false
            }
        default: return state;
    }
}