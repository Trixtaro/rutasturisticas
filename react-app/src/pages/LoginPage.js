import React from 'react';
import { Link } from 'react-router-dom';

import './styles/LoginPage.css';

class Login extends React.Component{

    render(){
        return (
            <React.Fragment>
                <div className="LoginPage">
                    <h1>Iniciar sesión</h1>
                    <Link to="">Regresar</Link>
                    <form action="">
                        <label htmlFor="usuario">Usuario</label>
                        <input type="text" id="usuario" name="usuario" />
                        <label htmlFor="clave">Contraseña</label>
                        <input type="text" id="clave" name="clave" />
                        <button>Iniciar</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }

}

export default Login;