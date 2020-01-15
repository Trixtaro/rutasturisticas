import React from 'react';
import { Link } from 'react-router-dom';

import './styles/RegisterTurista.css';

class RegisterTurista extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div className="RegisterTurista">
                    <div className="Caja">
                        <div className="form">
                            <form>
                                <div className="nombre">
                                    <h1>Create tu cuenta turísta</h1>
                                </div>
                                <div className="cuerpo">
                                    <div className="fields">
                                        <div className="datos">
                                            <div className="field">
                                                <label htmlFor="nombres">Nombres:</label>
                                                <input type="text" id="nombres" name="nombres"></input>
                                            </div>
                                            <div className="field">
                                                <label htmlFor="apellidos">Apellidos:</label>
                                                <input type="text" id="apellidos" name="apellidos"></input>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label>País de Origen</label>
                                            <select name="paises">
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
                                        <div className="btn-accion">Aceptar</div>
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