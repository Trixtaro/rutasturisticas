import React from 'react';
import { Link } from 'react-router-dom';
import './styles/PageCodeHTTP.css';

const Page404 = () => (
    <div className="PageCodeHTTP">
        <div className="error">
            <h1>Error 404</h1>
        </div>
        <div className="descripcion">
            <h2>La página que ha solicitado no está disponible, o no existe.</h2>
        </div>
        <Link to="/">
            Regresar <i className="fas fa-undo-alt"></i>
        </Link>
    </div>
);

export default Page404;