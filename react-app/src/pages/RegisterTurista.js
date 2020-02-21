import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import './styles/RegisterTurista.css';

class RegisterTurista extends React.Component {
    state = {
        error : '',
        cargando: false,
        enviado: false,
        form: {
            clave: '',
            correo: '',
            nickname: '',
            nombres: '',
            apellido_paterno: '',
            apellido_materno: '_',
            f_nacimiento: '2000-1-1',
            cedula: '',
            pasaporte: ' ',
            genero: '',
            nacionalidad: 'Ecuador'
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

        if (e.target.name === 'correo')
            this.setState({
                form: {
                    ...this.state.form,
                    correo: e.target.value,
                    nickname: e.target.value
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
        if (localStorage.usertoken) {
            return <Redirect to="/" />;
        }

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
                                    <div className="fields">
                                        <div className="datos">
                                            <div className="field">
                                                <label htmlFor="cedula">Cedula o Pasaporte:</label>
                                                <input type="text" id="cedula" name="cedula" onChange={this.handleChange} value={this.state.form.cedula}></input>
                                            </div>
                                            <div className="field">
                                                <label htmlFor="nombres">Nombres:</label>
                                                <input type="text" id="nombres" name="nombres" onChange={this.handleChange} value={this.state.nombres}></input>
                                            </div>
                                        </div>
                                        <div className="datos">
                                            <div className="field">
                                                <label htmlFor="apellido-p">Apellidos:</label>
                                                <input type="text" id="apellido-p" name="apellido_paterno" onChange={this.handleChange} value={this.state.apellido_paterno}></input>
                                            </div>
                                            {/* <div className="field"> */}
                                                {/* <label htmlFor="apellido-m">Apellido Materno:</label> */}
                                                <input type="hidden" id="apellido-m" name="apellido_materno" ></input>
                                            {/* </div> */}
                                        </div>
                                        {/* <div className="field"> */}
                                            {/* <label>País de Origen</label>
                                            <select name="nacionalidad" onChange={this.handleChange} value={this.state.form.nacionalidad}>
                                                <option value="0">Seleccione...</option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Chile">Chile</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="USA">Estados Unidos de América</option>  
                                            </select> */}
                                            <input type="hidden" name="nacionalidad" onChange={this.handleChange} value={this.state.form.nacionalidad}/>
                                        {/* </div> */}
                                        <div className="field">
                                            <label>Género</label>
                                            <select name="genero" onChange={this.handleChange} value={this.state.form.genero}>
                                                <option value="0">Seleccione su género</option>
                                                <option value="M">Masculino</option>
                                                <option value="F">Femenino</option>
                                                <option value="O">Otro</option>
                                            </select>
                                        </div>
                                        {/* <div className="field"> */}
                                            {/* <label htmlFor="usuario">Usuario:</label> */}
                                            <input type="hidden" id="usuario" name="nickname" ></input>
                                        {/* </div> */}
                                        {/* <div className="field"> */}
                                            {/* <label htmlFor="pasaporte">Pasaporte:</label> */}
                                            <input type="hidden" id="pasaporte" name="pasaporte" onChange={this.handleChange} value={this.state.form.pasaporte}></input>
                                        {/* </div> */}
                                        <div className="field">
                                            <label htmlFor="correo">Correo Electrónico:</label>
                                            <input type="email" id="correo" name="correo" onChange={this.handleChange} value={this.state.form.correo}></input>
                                        </div>
                                        {/* <div className="field"> */}
                                            {/* <label htmlFor="f-nacimiento">Fecha de nacimiento:</label> */}
                                            <input type="hidden" id="f-nacimiento" name="f_nacimiento" onChange={this.handleChange} value={this.state.form.f_nacimiento}></input>
                                        {/* </div> */}
                                        <div className="datos">
                                            <div className="field">
                                                <label htmlFor="clave">Contraseña:</label>
                                                <input type="password" id="clave" name="clave" onChange={this.handleChange} value={this.state.form.clave}></input>
                                            </div>
                                            {/* <div className="field">
                                                <label htmlFor="clave2">Repetir contraseña:</label>
                                                <input type="password" id="clave2" name="clave2"></input>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="botones">
                                    {/* <div className="regresar">
                                        <Link to="./">
                                            <i class="fas fa-undo-alt" aria-hidden="true"></i>Regresar
                                        </Link>
                                    </div> */}

                                        <div className="btn-accion">
                                            <button>Enviar!</button>
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