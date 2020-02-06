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

            return;
        }

        this.setState({
            ...this.state,
            usuario: data.usuario,
            persona: data.persona
        })


        console.log(this.state)

    }

    toggleOptions = () => {
        
        const $options = document.querySelector('.user-panel-options')

        $options.classList.toggle('invisible')

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
                    {
                        (!this.state.usuario || !this.state.persona) && 
                            <React.Fragment>
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
                            </React.Fragment>
                    }
                    
                    {
                        (this.state.usuario && this.state.persona) && 
                        <React.Fragment>
                            <div className="separador">
                                <div to="/login">                                    
                                    <h2><i className="fas fa-user"></i> 
                                    &nbsp;&nbsp;
                                    {`${this.state.usuario.nickname}`}</h2>
                                </div>
                            </div>
                            <button onClick={this.toggleOptions} className="flechita">
                                <i className="fas fa-chevron-down"></i>
                            </button>
                            <div className="user-panel-options invisible">
                                <h4 style={{color: 'black', border: 'none' }}>
                                    { `${this.state.persona.nombres} ${this.state.persona.apellido_paterno} ${this.state.persona.apellido_materno}` }
                                </h4>
                                <Link to="/">
                                    <h3>
                                        Ver Perfil
                                    </h3>
                                </Link>
                                <Link to="/logout">
                                    <h3>
                                        Cerrar sesión
                                    </h3>
                                </Link>
                            </div>
                        </React.Fragment>
                    }
                </div>
            </div>
        );
    }
}

export default Navbar;