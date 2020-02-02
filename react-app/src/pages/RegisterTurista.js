import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './styles/RegisterTurista.css';

class RegisterTurista extends React.Component {

    state = {
        error : '',
        cargando: false,
        enviado: false,
        form: {
            nickname: '',
            clave: '',
            correo: '',
            nombres: '',
            apellido_paterno: '',
            apellido_materno: '',
            f_nacimiento: '',
            cedula: '',
            pasaporte: '',
            genero: '',
            nacionalidad: ''
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
        
        const data = await response.json();
        
        if(data.token){
            localStorage.setItem('usertoken',data.token)
            this.props.history.push(`/`);
        } else {
            alert(data)
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }

    componentDidMount () {
        if (document.forms.length === 1) {
            var focusInput = function () {
                this.parentElement.children[0].className = "label active";
            };

            var blurInput = function () {
                if (this.value <= 0) {
                    this.parentElement.children[0].className = "label";
                }
            };
            var formulario = document.forms[0],
                elementos = formulario.elements;
            for (var i = 0; i < elementos.length; i++) {
                if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
                    elementos[i].addEventListener("focus", focusInput);
                    elementos[i].addEventListener("blur", blurInput);
                }
            }

        }
    }

    render () {
        return (
            <React.Fragment>
                <div className="RegisterTurista">
                    <div className="Caja">
                        <div className="form">
                            <form className='formulario_registro' onSubmit={this.handleSubmit}>
                                <div className="nombre">
                                    <h1>Create tu cuenta turísta</h1>
                                </div>
                                <div className="cuerpo">

                                    <div className="field">
                                        <label className='label' htmlFor="cedula">Cedula:</label>
                                        <input type="text" id="cedula" name="cedula" onChange={this.handleChange} value={this.state.form.cedula}></input>
                                    </div>

                                    <div className="field">
                                        <label className='label' htmlFor="nombres">Nombres:</label>
                                        <input type="text" id="nombres" name="nombres" onChange={this.handleChange} value={this.state.nombres}></input>
                                    </div>

                                    <div className="field">
                                        <label className='label' htmlFor="apellido-p">Apellido Paterno:</label>
                                        <input type="text" id="apellido-p" name="apellido_paterno" onChange={this.handleChange} value={this.state.apellido_paterno}></input>
                                    </div>

                                    <div className="field">
                                        <label className='label' htmlFor="apellido-m">Apellido Materno:</label>
                                        <input type="text" id="apellido-m" name="apellido_materno" onChange={this.handleChange} value={this.state.apellido_materno}></input>
                                    </div>

                                    <div className="field-select">
                                        <select className='select-text' name="nacionalidad" onChange={this.handleChange} value={this.state.form.nacionalidad}>
                                            <option value="" disabled selected></option>
                                            <option value="Ecuador">Ecuador</option>
                                        </select>
                                        <span class="select-highlight"></span>
                                        <span class="select-bar"></span>
                                        <label className='select-label'>País de Origen</label>
                                    </div>

                                    <div className="field-select">
                                        <select className='select-text' name="genero" onChange={this.handleChange} value={this.state.form.genero}>
                                            <option value="" disabled selected></option>
                                            <option value="M">Masculino</option>
                                            <option value="F">Femenino</option>
                                        </select>
                                        <span class="select-highlight"></span>
                                        <span class="select-bar"></span>
                                        <label className='select-label'>Género</label>
                                    </div>

                                    <div className="field">
                                        <label className='label' htmlFor="usuario">Usuario:</label>
                                        <input type="text" id="usuario" name="nickname" onChange={this.handleChange} value={this.state.form.nickname}></input>
                                    </div>

                                    <div className="field">
                                        <label className='label' htmlFor="pasaporte">Pasaporte:</label>
                                        <input type="text" id="pasaporte" name="pasaporte" onChange={this.handleChange} value={this.state.form.pasaporte}></input>
                                    </div>

                                    <div className="field">
                                        <label className='label' htmlFor="correo">Correo Electrónico:</label>
                                        <input type="email" id="correo" name="correo" onChange={this.handleChange} value={this.state.form.correo}></input>
                                    </div>

                                    <div className="field-date">
                                        <label className='label' htmlFor="f-nacimiento">Fecha de nacimiento:</label>
                                        <input type="date" id="f-nacimiento" name="f_nacimiento" onChange={this.handleChange} value={this.state.form.f_nacimiento}></input>
                                    </div>

                                    <div className="field">
                                        <label className='label' htmlFor="clave">Contraseña:</label>
                                        <input type="password" id="clave" name="clave" onChange={this.handleChange} value={this.state.form.clave}></input>
                                    </div>

                                    <div className="field">
                                        <label className='label' htmlFor="clave2">Repetir contraseña:</label>
                                        <input type="password" id="clave2" name="clave2"></input>
                                    </div>

                                    <div className="btn-accion">
                                        <button>Registrarse</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className="regresar">
                            <Link to="./">Regresar</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(RegisterTurista);