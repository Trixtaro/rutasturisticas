import React from 'react';
import { Link } from 'react-router-dom';

import './styles/LoginPage.css';

class Login extends React.Component{

    render(){
        return (
            <React.Fragment>
                <div className="LoginPage">
                    <h1>Iniciar sesión</h1>
                    <div className="formContainer">
                        <Link to="">
                            <div className="back">
                                Regresar
                            </div>
                        </Link>
                        <form action="">
                            <div className="field">
                                <label htmlFor="usuario">Usuario:</label>
                                <input type="text" id="usuario" name="usuario" />
                            </div>
                            <div className="field">
                                <label htmlFor="clave">Contraseña:</label>
                                <input type="text" id="clave" name="clave" />
                            </div>
                            <Link to="">
                                <div className="boton">Iniciar</div>
                            </Link>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default Login;