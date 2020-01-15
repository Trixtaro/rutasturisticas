import React from 'react';

import { Link } from 'react-router-dom';

import './styles/Navbar.css';

class Navbar extends React.Component {
    render () {
        return (
            <div className="Navbar">
                <Link to="/">
                    <div className="imagotipo">
                        <div className="imagen-logo">
                            <img src="/logointerfaces.png" alt="Rutas turisticas"/>
                        </div>
                        <div className="logo">
                            <h1>Rutas turísticas</h1>
                        </div>
                    </div>
                </Link>
                <div className="user-panel">
                    <div className="separador">
                        <Link to="/login">
                            <h2>Iniciar sesión</h2>
                        </Link>
                    </div>
                    <div>
                        <Link to="/register">
                            <h2 className="important">Registrarse</h2>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;