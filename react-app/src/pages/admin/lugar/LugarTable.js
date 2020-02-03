import React from 'react';

class LugarTable extends React.Component {
    tabla () {
        return (
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Altura sobre nivel del mar</th>
                    <th>Latitud</th>
                    <th>Longitud</th>
                    <th>Imagen</th>
                    <th>ID Zona</th>
                </tr>
                <tr></tr>
            </table>
        );
    }
    render () {
        return ( this.tabla() );
    }
}

export default LugarTable;