import React from 'react';
import { Redirect } from 'react-router-dom';
import './styles/LoginPage.css';
import Spinner from '../components/General/Spinner';
import IconPeople1 from "../images/iconfinder_User_4200769.svg";
import IconLock1 from "../images/iconfinder_102_111044.svg";

class Login extends React.Component {
    state = {
        error : '',
        cargando: false,
        logueado: '',
        form: {
            nickname: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        console.log('hola')

        this.setState({cargando: true});

        const response = await fetch(
            `${process.env.REACT_APP_LARAVEL}/api/login`, 
                { 
                    method: 'POST',
                    body: JSON.stringify(this.state.form)
                }
        );

        const respuesta = await response.json();

        if (respuesta.token){

            localStorage.setItem('usertoken',respuesta.token)

            this.setState({
                logueado: true,
                cargando: false
            })

        } else if (respuesta.error) {
            this.setState({
                error: respuesta.error,
                cargando: false
            })
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

    render () {
        if (this.state.logueado || localStorage.usertoken) {
            return <Redirect to="/" />;
        }

        return (
            <React.Fragment>
                <div className="LoginPage">
                    <div className="icono">
                        <img src={IconPeople1} alt="Icono Persona 1"></img>
                    </div>                    
                    <form onSubmit={this.handleSubmit}>
                        <div className="field">
                            <img src={IconPeople1} alt="Icono Persona 1"></img>
                            <input type="text" id="usuario" name="nickname" placeholder="Usuario" onChange={this.handleChange} value={this.state.form.nickname} required/>
                        </div>
                        <div className="field">
                            <img src={IconLock1} alt="Icono Candado 1"></img>
                            <input type="password" id="clave" name="password" placeholder="Contraseña"  onChange={this.handleChange} value={this.state.form.clave} required/>
                        </div>
                        <button className="boton">Iniciar</button>
                    </form>
                    {
                        (this.state.cargando) && <Spinner />
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Login;