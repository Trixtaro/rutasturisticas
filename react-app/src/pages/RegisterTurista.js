import React from 'react';
import { Link } from 'react-router-dom';

import './styles/RegisterTurista.css';

class RegisterTurista extends React.Component {

    state = {
        error : '',
        cargando: false,
        enviado: false,
        form: {
            nickname: 'Trixtaro',
            clave: 'CodeGeass',
            correo: 'wilmerdavid97@hotmail.com',
            nombres: 'Wilmer',
            apellido_paterno: 'Cedeño',
            apellido_materno: 'Mendoza',
            pais: 'Ecuador',
            f_nacimiento: '1997-10-22',
            cedula: '1314011774',
            pasaporte: '0',
            genero: 'M',
            nacionalidad: 'Ecuatoriano'
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        this.setState({cargando: true});

        const response = await fetch(
            `${process.env.REACT_APP_LARAVEL}/api/register`, 
                { 
                    method: 'POST',
                    body: JSON.stringify(this.state.form)
                }
        );
        
        const respuesta = await response.json();

        console.log(respuesta)
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
                                                <label htmlFor="cedula">Cedula:</label>
                                                <input type="text" id="cedula" name="cedula"></input>
                                            </div>
                                            <div className="field">
                                                <label htmlFor="nombres">Nombres:</label>
                                                <input type="text" id="nombres" name="nombres" onChange={this.handleChange} value={this.state.nombres}></input>
                                            </div>
                                        </div>
                                        <div className="datos">
                                            <div className="field">
                                                <label htmlFor="apellido-p">Apellido Paterno:</label>
                                                <input type="text" id="apellido-p" name="apellido-p"></input>
                                            </div>
                                            <div className="field">
                                                <label htmlFor="apellido-m">Apellido Materno:</label>
                                                <input type="text" id="apellido-m" name="apellido-m"></input>
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
                                            <label htmlFor="usuario">Usuario:</label>
                                            <input type="text" id="usuario" name="usuario"></input>
                                        </div>
                                        <div className="field">
                                            <label htmlFor="pasaporte">Pasaporte:</label>
                                            <input type="text" id="pasaporte" name="pasaporte"></input>
                                        </div>
                                        <div className="field">
                                            <label htmlFor="correo">Correo Electrónico:</label>
                                            <input type="email" id="correo" name="correo"></input>
                                        </div>
                                        <div className="field">
                                            <label htmlFor="f-nacimiento">Fecha de nacimiento:</label>
                                            <input type="date" id="f-nacimiento" name="f-nacimiento"></input>
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