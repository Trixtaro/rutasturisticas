import React from 'react';

class ZonaTable extends React.Component {
    tabla () {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Latitud</th>
                        <th>Longitud</th>
                        <th>Nombre</th>
                        <th>Cargo</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                    </tr>
                </tbody>
            </table>
        );
    }
    render () {
        return ( this.tabla() );
    }
}

export default ZonaTable;