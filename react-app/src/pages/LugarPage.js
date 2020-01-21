import React from 'react';
import { Link } from 'react-router-dom';

import Buscador from '../components/Buscador';
import Lugar from '../components/Lugar';
import foto from '../images/portoviejo.jpg';

import './styles/LugarPage.css';

class LugarPage extends React.Component{

    render(){
        return (
            <div className="LugarPage">
                <Link className="regresar" to="/">
                    <i class="fas fa-undo-alt"></i>
                    &nbsp;
                    Regresar
                </Link>
                <h1 className="titulo-lugares">
                    Resultados de la búsqueda de lugares...
                </h1>
                <Buscador placeholder="Escriba su lugar de destino (Ciudad, País, Lugar, etc)" />    
                <div className="lugares">
                    <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                    <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                    <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                </div>
            </div>
        );
    }

}

export default LugarPage;