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
        let rutaServer = `${process.env.REACT_APP_LARAVEL}/api/register`;
        const response = await fetch(
             rutaServer,
                { 
                    method: 'POST',
                    body: JSON.stringify(this.state.form)
                }
        );

        const data = await response.json();

        if (data.token) {
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
                if (elementos[i].type === "text" || elementos[i].type === "email" || elementos[i].type === "password") {
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

                    <div className="logo-registro">
                        <img src="/logointerfaces.png" alt="Rutas turisticas"/>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                                <div className="nombre">
                                    <h1>Regístrate!</h1>
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
                                    <div className='group-field'>
                                        <div className="field">
                                            <label>País de Origen</label>
                                            <select name="nacionalidad" onChange={this.handleChange} value={this.state.form.nacionalidad}>
                                                <option value="0">Seleccione...</option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Chile">Chile</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="USA">Estados Unidos de América</option>  
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label>Género</label>
                                            <select name="genero" onChange={this.handleChange} value={this.state.form.genero}>
                                                <option value="0">Seleccione su género</option>
                                                <option value="M">Masculino</option>
                                                <option value="F">Femenino</option>
                                                <option value="I">Indefinido</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="field-select">
                                        <select className='select-text' name="nacionalidad" onChange={this.handleChange} value={this.state.form.nacionalidad}>
                                            <option value="" disabled selected></option>
                                            <option value="Ecuador">Ecuador</option>
                                        </select>
                                        <span className="select-highlight"></span>
                                        <span className="select-bar"></span>
                                        <label className='select-label'>País de Origen</label>
                                    </div>
                                    <div className="field-select">
                                        <select className='select-text' name="genero" onChange={this.handleChange} value={this.state.form.genero}>
                                            <option value="" disabled selected></option>
                                            <option value="M">Masculino</option>
                                            <option value="F">Femenino</option>
                                        </select>
                                        <span className="select-highlight"></span>
                                        <span className="select-bar"></span>
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
                                    <div className='group-field'>
                                        <div className="field">
                                            <label className='label' htmlFor="clave">Contraseña:</label>
                                            <input type="password" id="clave" name="clave" onChange={this.handleChange} value={this.state.form.clave}></input>
                                        </div>
                                        <div className="field">
                                            <label className='label' htmlFor="clave2">Repetir contraseña:</label>
                                            <input type="password" id="clave2" name="clave2"></input>
                                        </div>
                                    </div>
                                    <div className="botones">
                                    <div className="regresar">
                                        <Link to="./">
                                            <i class="fas fa-undo-alt" aria-hidden="true"></i>Regresar
                                        </Link>
                                    </div>

                                        <div className="btn-accion">
                                            <button>Registrarse</button>
                                        </div>
                                    </div>
                                </div>
                            </form>   
                  
                </div>
                
            </React.Fragment>
        );
    }
}

export default withRouter(RegisterTurista);