import React from 'react';

import Opcion from '../components/OpcionUsuario';
import FotoTurista from '../images/turista.jpg';
import FotoGuia from '../images/guia.jpg';

import './styles/RegisterPage.css';

class RegisterPage extends React.Component{

    render(){
        return (
            <React.Fragment>
                <div className="RegisterPage">
                    <h1 className="titulo">¿Cómo te deseas registrar?</h1>
                    <div className="opciones">
                        <Opcion 
                            titulo="Turista" 
                            foto={FotoTurista} 
                            descripcion="Disfruta de tus viajes acompañados de expertos locales" 
                            link="/register/turista"
                        />
                        <Opcion 
                            titulo="Guia turístico" 
                            foto={FotoGuia} 
                            descripcion="Ayuda a generar experiencias de viajes increibles a turistas de todas partes del mundo." 
                            link="/register/guia"
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RegisterPage;