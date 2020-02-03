import React from 'react';

class ZonaTable extends React.Component {
    tabla () {
        return (
            <table>
                <tr>
                    <th>Latitud</th>
                    <th>Longitud</th>
                    <th>Nombre</th>
                    <th>Cargo</th>
                    <th>Descripción</th>
                </tr>
                <tr></tr>
            </table>
        );
    }
    render () {
        return ( this.tabla() );
    }
}

export default ZonaTable;