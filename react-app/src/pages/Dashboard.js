import React from 'react';

import Buscador from '../components/Buscador';
import Lugar from '../components/Lugar';
import foto from '../images/montecristi.jpg';

import './styles/Dashboard.css';

class Dashboard extends React.Component {
    render () {
        return (
            <div className="Dashboard">
                <div className="hero">
                    <h1>Rutas Turísticas</h1> 
                    <p>Encuentra tu guía  turistico <br /> para ese viaje que tanto deseas.</p>
                    <div className="Dashboard-buscador">
                        <Buscador placeholder="Ingrese el lugar" />
                    </div>
                    <div>
                        <h2 className="titulo-lugares">
                            Los lugares más visitados del mes
                        </h2>
                        <div className="Dashboard-lugares">
                            <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                            <Lugar clases={'selected'} titulo="Manta" imagen={foto} descripcion="La capital de los pescados" />
                            <Lugar titulo="Portoviejo" imagen={foto} descripcion="La capital de los manabitas" />
                        </div>
                    </div>
                    <div className="points">
                        <div className="point"></div>
                        <div className="point selected"></div>
                        <div className="point"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;