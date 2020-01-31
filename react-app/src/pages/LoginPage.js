import React from 'react';
import { Link } from 'react-router-dom';

import './styles/LoginPage.css';

import IconPeople1 from "../images/iconfinder_User_4200769.svg";
import IconLock1 from "../images/iconfinder_102_111044.svg";

class Login extends React.Component {

    state = {
        error : '',
        cargando: false,
        enviado: false,
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

    render () {
        return (
            <React.Fragment>
                <div className="LoginPage">
                    <div className="icono">
                        <img src={IconPeople1} alt="Icono Persona 1"></img>
                    </div>                    
                    <form onSubmit={this.handleSubmit}>
                        <div className="field">
                            <img src={IconPeople1} alt="Icono Persona 1"></img>
                            <input type="text" id="usuario" name="nickname" placeholder="Usuario" onChange={this.handleChange} value={this.state.form.nickname}/>
                        </div>
                        <div className="field">
                            <img src={IconLock1} alt="Icono Candado 1"></img>
                            <input type="password" id="clave" name="password" placeholder="Contraseña"  onChange={this.handleChange} value={this.state.form.clave} />
                        </div>
                        <button>Iniciar</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;