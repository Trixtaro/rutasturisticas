import React from 'react';

import './styles/Lugar.css';

class Lugar extends React.Component{
    
    componentDidMount () {

    }
    
    render () {
        return (
            <div className={`Lugar ${this.props.clases}`} title={ this.props.titulo }>
                <img src={ this.props.imagen } alt={this.props.titulo}/>
                <h1 className="titulo-lugar">{ this.props.titulo }</h1>
                <p>{ this.props.descripcion }</p>
            </div>
        );
    }
}

export default Lugar;