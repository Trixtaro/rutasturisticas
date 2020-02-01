import React from 'react';

import { Link } from 'react-router-dom';

import {getProfile} from '../functions/Functions';

import './styles/Navbar.css';

class Navbar extends React.Component {

    state = {
        usuario: null,
        persona: null
    }

    async componentDidMount(){
        
        const data = await getProfile()
        
        if(data == 'token_expired' || data == 'token_invalid' ){
            localStorage.removeItem('usertoken');
            
            this.setState({
                usuario: null,
                persona: null
            })

            alert('Debe volver a iniciar sesión');
            return;
        }

        this.setState({
            ...this.state,
            usuario: data.usuario,
            persona: data.persona
        })


        console.log(this.state)

    }

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