import React from 'react';
import { Link } from 'react-router-dom';

import Buscador from '../components/Buscador';

import './styles/LugarPage.css';
import Lugar from '../components/Lugar';

class LugarPage extends React.Component{

    state = {
        lugares: []
    }

    async componentDidMount(){

        const response = await fetch(`${process.env.REACT_APP_LARAVEL}/api/lugares/${this.props.match.params.id}`);
            const data = await response.json();
            this.setState({
                lugares: data.data
            });

    }

    ponerLugares = () => {

        if(this.state.lugares.length)
            return this.state.lugares.map( lugar => {
                return <Lugar imagen={lugar.foto} titulo={lugar.nombre} descripcion={lugar.descripcion} />;
            });
    }

    render(){
        return (
            <div className="LugarPage">
                <Link to="/">
                    <div className="LugarPage-regresar">
                        <i class="fas fa-undo-alt"></i>
                        &nbsp;
                        Regresar
                    </div>
                </Link>
                <h1 className="titulo-lugares">
                    Resultados de la búsqueda de lugares...
                </h1>
                <Buscador placeholder="Escriba su lugar de destino (Ciudad, País, Lugar, etc)" />    
                <div className="lugares">
                {
                    this.ponerLugares()
                }
                </div>
            </div>
        );
    }

}

export default LugarPage;