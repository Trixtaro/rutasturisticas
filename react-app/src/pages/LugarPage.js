import React from 'react';

import Lugar from '../components/Lugar';
import foto from '../images/montecristi.jpg';

import './styles/LugarPage.css';

class LugarPage extends React.Component{

    render(){
        return (
            <div className="LugarPage">
                <h1 className="titulo-lugares">
                    Los lugares más visitados
                </h1>
                <div className="lugares">
                    <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                    <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                    <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                    <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                    <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                    <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                    <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                    <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                    <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                    <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                    <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                    <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                </div>
            </div>
        );
    }

}

export default LugarPage;