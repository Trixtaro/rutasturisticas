import React from 'react';
import { Link } from 'react-router-dom';
import './styles/PageCodeHTTP.css';

const Page403 = () => (
    <div className="PageCodeHTTP">
        <div className="error">
            <h1>Error 403</h1>
        </div>
        <div className="descripcion">
            <h2>No tiene permitido entrar a la página que ha solicitado.</h2>
        </div>
        <Link to="/">
            Regresar <i className="fas fa-undo-alt"></i>
        </Link>
    </div>
);

export default Page403;