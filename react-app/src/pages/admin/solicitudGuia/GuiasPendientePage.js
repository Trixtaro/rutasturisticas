import React from 'react';

class GuiasPendientePage extends React.Component {
    render () {
        return (
            <div>
                <h5>Solicitudes Pendientes</h5>
                <ul>
                    <li>Guia #1</li>
                    <li>Guia #2</li>
                    <li>
                        Guia #3
                        <ul>
                            <li>Nombre: </li>
                            <li>Fecha de envio: hoy</li>
                            <li>Más información</li>
                        </ul>
                    </li>
                    <li>Guia #4</li>
                    <li>Guia #5</li>
                    <li>Guia #6</li>
                    <li>Guia #7</li>
                </ul>
            </div>
        );
    }
}

export default GuiasPendientePage;