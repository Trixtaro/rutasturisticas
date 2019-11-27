import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Buscador.css'

class Buscador extends React.Component{

    render(){
        return (
            <form className="Buscador" action="">
                <input type="text" placeholder={this.props.placeholder} />
                <Link to="">
                    <i class="fas fa-search lupa"></i>
                </Link>
            </form>
        );
    }

}

export default Buscador;