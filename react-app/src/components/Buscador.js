import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Buscador.css'

class Buscador extends React.Component{

    render(){
        return (
            <form autoComplete="off" className="" action="">
                <div className="Buscador autocomplete">
                    <input id="buscador" type="text" placeholder={this.props.placeholder} />
                    <button className="lupa" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
        );
    }

}

export default Buscador;