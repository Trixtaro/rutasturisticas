import React from 'react';
import { Link } from 'react-router-dom';
import {getProfile} from '../functions/Functions';
import './styles/Navbar.css';

class Navbar extends React.Component {
    state = {
        usuario: null,
        persona: null,
        admin: false,
    }

    async componentDidMount () {
        const data = await getProfile()
        console.log("El fetch en navbar dio ", data);
        if (data[0] === 'token_expired' || data[0] === 'token_invalid' ) {
            localStorage.removeItem('usertoken');
            console.log("Navbar removio token");
            this.setState({
                usuario: null,
                persona: null,
                admin: false,
            })

            return;
        }

        this.setState({
            ...this.state,
            usuario: data.usuario,
            persona: data.persona,
            admin: data.admin,
        })
        console.log('El navbar devuelve de this.state ', this.state);
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
                            <h2>Rutas turísticas</h2>
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
                                    <h3><i className="fas fa-user"></i> 
                                    &nbsp;&nbsp;
                                    {`${this.state.usuario.nickname}`}</h3>
                                </div>
                            </div>
                            <button onClick={this.toggleOptions} className="flechita">
                                <i className="fas fa-chevron-down"></i>
                            </button>
                            <div className="user-panel-options invisible">
                                <h4 style={{color: 'black', border: 'none' }}>
                                    { `${this.state.persona.nombres} ${this.state.persona.apellido_paterno} ${this.state.persona.apellido_materno}` }
                                </h4>
                                <small>
                                    { this.state.usuario.turistas.length > 0 ? 'Turista' : '' }
                                    { this.state.usuario.guias.length > 0 ? ( 
                                        this.state.usuario.guias[0].estado === 'R' ? ' - Guía Rechazado' : (
                                            this.state.usuario.guias[0].estado === 'H' ? ' - Guía' : 'errorGuia'
                                        )
                                    ) : '' }
                                </small>
                                <Link to="/perfil">
                                    <h3>
                                        Ver Perfil
                                    </h3>
                                </Link>
                                { ( this.state.admin ? <Link to='/admin'><h3>Admin</h3></Link> : null ) }
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