import React from 'react';

import Buscador from '../components/Buscador';
import Lugar from '../components/Lugar';
import montecristi from '../images/montecristi.jpg';
import portoviejo from '../images/portoviejo.jpg';
import manta from '../images/manta.jpg';

import './styles/Dashboard.css';

class Dashboard extends React.Component {
    render () {
        return (
            <div className="Dashboard">
                <div className="hero">
                    <h1>Rutas Turísticas</h1> 
                    <p>Encuentra tu guía  turistico <br /> para ese viaje que tanto deseas.</p>
                    <div className="Dashboard-buscador">
                        <Buscador placeholder="Busca tus lugares preferidos..." />
                    </div>
                    <div>
                        <h2 className="titulo-lugares">
                            Los lugares más visitados del mes
                        </h2>
                        <div className="Dashboard-lugares">
                            <Lugar titulo="Portoviejo" imagen={portoviejo} descripcion="La capital de los manabitas." />
                            <Lugar titulo="Manta" imagen={manta} descripcion="Principal puerto atunero del mundo." />
                            <Lugar titulo="Montecristi" imagen={montecristi} descripcion="La cuna de Eloy Alfaro, y artesanias como el sombrero de paja toquilla." />
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