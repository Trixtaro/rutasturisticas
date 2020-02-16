import API from '../../utils/API';

import { CARGANDO, LUGARES_TRAER_POR_ZONA, ERROR } from '../types/lugaresTypes';

export const traerPorZona = (key) => async( dispatch ,getState ) => {
    try{
        
        dispatch({
            type: CARGANDO
        })

        const { lugares } = getState().lugaresReducer;

        const nuevos_lugares = await API.getLugarPorZona(key);

        const lugaresActualizados = lugares.concat(nuevos_lugares);
        
        dispatch({
            type: LUGARES_TRAER_POR_ZONA,
            payload: lugaresActualizados
        })

    } catch (error){

        dispatch({
            type: ERROR,
            payload: 'No se pudieron cargar los lugares.'
        })

    }
}