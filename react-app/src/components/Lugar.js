import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Lugar.css';

class Lugar extends React.Component{
    
    componentDidMount () {

    }
    
    render () {
        return (
            <Link to={`/lugar/${this.props.lugar.id}`}>
                <div className={`Lugar ${this.props.clases}`} title={ this.props.lugar.nombre }>
                    <img src={ this.props.lugar.foto } alt={this.props.lugar.nombre}/>
                    <h1 className="titulo-lugar">{ this.props.lugar.nombre }</h1>
                    <p>{ this.props.lugar.descripcion }</p>
                </div>
            </Link>
        );
    }
}

export default Lugar;