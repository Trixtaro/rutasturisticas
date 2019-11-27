import React from 'react';

import { Link } from 'react-router-dom';

import './styles/Navbar.css';

class Navbar extends React.Component{

    render(){

        return (
                <div className="Navbar">
                    <div className="logo">
                        <h1>Rutas turísticas</h1>
                    </div>
                    <div className="user-panel">
                        <div className="separador">
                            <h2>Registrarse</h2>
                        </div>
                        <div>
                            <h2>Iniciar sesión</h2>
                        </div>
                    </div>
                </div>
        );

    }

}

export default Navbar;