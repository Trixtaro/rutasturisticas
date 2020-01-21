import React from 'react';
import { Link } from 'react-router-dom';

import './styles/RegisterTurista.css';

class RegisterTurista extends React.Component {

    state = {
        error : '',
        cargando: false,
        enviado: false,
        form: {
            nombres: '',
            apellidos: '',
            pais: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        this.setState({cargando: true});

        const response = await fetch(
            `${process.env.REACT_APP_LARAVEL}/api/register`, 
                { 
                    method: 'post',
                    body: this.state.form
                }
        );
        
        const respuesta = await response.json();

        if(respuesta == 'Exito'){
            this.setState({
                enviado: true,
                cargando: false
            })
        } else {
            this.setState({
                error: respuesta,
                cargando: false,
            })
        }

        console.log(this.state)
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }

    componentDidMount(){
        
    }

    render () {
        return (
            <React.Fragment>
                <div className="RegisterTurista">
                    <div className="Caja">
                        <div className="form">
                            <form onSubmit={this.handleSubmit}>
                                <div className="nombre">
                                    <h1>Create tu cuenta turísta</h1>
                                </div>
                                <div className="cuerpo">
                                    <div className="fields">
                                        <div className="datos">
                                            <div className="field">
                                                <label htmlFor="nombres">Nombres:</label>
                                                <input type="text" id="nombres" name="nombres" onChange={this.handleChange} value={this.state.nombres}></input>
                                            </div>
                                            <div className="field">
                                                <label htmlFor="apellidos">Apellidos:</label>
                                                <input type="text" id="apellidos" name="apellidos" onChange={this.handleChange} value={this.state.apellidos}></input>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label>País de Origen</label>
                                            <select name="pais" onChange={this.handleChange} value={this.state.pais}>
                                                <option value="0">Seleccione...</option>
                                                <option value="1">Ecuador</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label htmlFor="correo">Correo Electrónico:</label>
                                            <input type="email" id="correo" name="correo"></input>
                                        </div>
                                        <div className="datos">
                                            <div className="field">
                                                <label htmlFor="clave">Contraseña:</label>
                                                <input type="password" id="clave" name="clave"></input>
                                            </div>
                                            <div className="field">
                                                <label htmlFor="clave2">Repetir contraseña:</label>
                                                <input type="password" id="clave2" name="clave2"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="botones">
                                        <Link to="../login">
                                            <div className="btn-iniciar-sesion">
                                                <div>Prefiero iniciar sesión</div>
                                            </div>
                                        </Link>
                                        <div className="btn-accion">
                                            <button>Registrarse</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="regresar">
                            <Link to="./">
                                Regresar
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RegisterTurista;