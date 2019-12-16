import React from 'react';

import './styles/Lugar.css';
class Lugar extends React.Component{
    
    componentDidMount(){

    }
    
    render(){
        return (
            <div className="Lugar">
                <img src={ this.props.imagen } alt="Lugar"/>
                <h1 className="titulo-lugar">{ this.props.titulo }</h1>
                <p>{ this.props.descripcion }</p>
            </div>
        );
    }
}

export default Lugar;