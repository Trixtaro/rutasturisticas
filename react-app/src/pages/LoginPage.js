import React from 'react';
import { Link } from 'react-router-dom';

import './styles/LoginPage.css';

import IconPeople1 from "../images/iconfinder_User_4200769.svg";
import IconLock1 from "../images/iconfinder_102_111044.svg";

class Login extends React.Component {

    render () {
        return (
            <React.Fragment>
                <div className="LoginPage">
                    <div className="icono">
                        <img src={IconPeople1} alt="Icono Persona 1"></img>
                    </div>                    
                    <form action="">
                        <div className="field">
                            <img src={IconPeople1} alt="Icono Persona 1"></img>
                            <input type="text" id="usuario" name="usuario" placeholder="Usuario" />
                        </div>
                        <div className="field">
                            <img src={IconLock1} alt="Icono Candado 1"></img>
                            <input type="text" id="clave" name="clave" placeholder="Contraseña" />
                        </div>
                    </form>
                    <div className="boton"><Link to="">Iniciar</Link></div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;