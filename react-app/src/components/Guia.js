import React from 'react';

import './styles/Guia.css';

class Guia extends React.Component{

    render(){

        return(
            <div className="Guia">
                <div className="foto">
                    <img src={this.props.foto} alt="guia"/>
                </div>
                <div className="datos">
                    <h3 className="nombres">
                        { this.props.nombres }
                    </h3>
                    <h3 className="titulo">
                        { this.props.titulo }
                    </h3>
                    <div className="estrellas">
                        <i className="fas fa-star"></i>
                        { this.props.estrellas }
                    </div>
                </div>
            </div>
        );

    }

}

export default Guia;