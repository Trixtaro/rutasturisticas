import React from 'react';
import { Link } from 'react-router-dom';

import foto from '../images/montecristi.jpg';

import './styles/SolicitudGuias.css';

class SolicitudGuias extends React.Component{

    guia = {
        nombres : 'Wilmer Cedeño',
        foto : foto,
        descripcion : 'Soy muy guapo'
    };

    render(){
        return (
            <div className="SolicitudGuias">
                <div className="panel">
                    <div className="informacion">
                        <div className="foto-frame">
                            <Link to="/" className="regresar">Regresar</Link>
                            <h1 className="titulo">
                                Informacion del guia
                            </h1>
                            <img src={ this.guia.foto } alt="xxxx"/>
                            <h2 className="nombres">
                                { this.guia.nombres }
                            </h2>
                        </div>
                        <p className="descripcion">
                            { this.guia.descripcion }
                        </p>
                    </div>
                    <div className="botones">
                        <button>
                            Ver certificado de turismo
                        </button>
                        <button>
                            Ver documento de identidad
                        </button>
                        <div className="aceptar-denegar">
                            <button>
                                Aceptar
                            </button>
                            <button>
                                Denegar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default SolicitudGuias;