import React from 'react';
import { Link } from 'react-router-dom';
import './styles/OpcionUsuario.css';

class OpcionUsuario extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div className="OpcionUsuario">
                    <h1 className="titulo-usuario">
                        { this.props.titulo }
                    </h1>
                    <figure>
                        <img src={this.props.foto} alt={ this.props.titulo } />
                    </figure>
                    <p className="descripcion-usuario">
                        { this.props.descripcion }
                    </p>
                    <Link to={ this.props.link }>
                        <div className="boton">
                            Iniciar
                        </div>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

export default OpcionUsuario;