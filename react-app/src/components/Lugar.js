import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Lugar.css';

class Lugar extends React.Component{
    componentDidMount () {}

    render () {
        return (
            <Link to={this.props.url || `/lugar/${this.props.lugar.id}`}>
                <div className="card Lugar" title={ this.props.lugar.nombre } >
                    <img src={ this.props.lugar.foto } className="card-img-top" alt={this.props.lugar.nombre} />
                    <div className="card-body">
                        <h5 className="card-title">{ this.props.lugar.nombre }</h5>
                        <p className="card-text">{ this.props.lugar.descripcion }</p>
                    </div>
                </div>
            </Link>
        );
    }
}

export default Lugar;