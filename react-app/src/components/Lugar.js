import React from 'react';
import { Link } from 'react-router-dom';

class Lugar extends React.Component{
    componentDidMount () {}

    render () {
        return (
            <div className="card Lugar" title={ this.props.lugar.nombre } >
                <img src={ this.props.lugar.foto } className="card-img-top" alt={this.props.lugar.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{ this.props.lugar.nombre }</h5>
                    <p className="card-text">{ this.props.lugar.descripcion }</p>
                    <Link className="card-link" to={this.props.url || `/lugar/${this.props.lugar.id}`} >
                        Más Info
                    </Link>
                </div>
            </div>
        );
    }
}

export default Lugar;