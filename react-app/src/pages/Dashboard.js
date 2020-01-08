import React from 'react';

import Buscador from '../components/Buscador';

import './styles/Dashboard.css';

class Dashboard extends React.Component {
    render () {
        return (
            <div className="Dashboard">
                <div className="hero">
                    <h1>Rutas Turísticas</h1> 
                    <p>Encuentra tu guía  turistico <br /> para ese viaje que tanto deseas.</p>
                    <Buscador placeholder="Ingrese el lugar" />
                </div>
            </div>
        );
    }
}

export default Dashboard;