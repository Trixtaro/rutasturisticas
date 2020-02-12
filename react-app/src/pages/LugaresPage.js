import React from 'react';
import { Link } from 'react-router-dom';
import Buscador from '../components/Buscador';
import './styles/LugaresPage.css';
import Lugar from '../components/Lugar';

class LugaresPage extends React.Component {
    state = {
        lugares: []
    }

    async componentDidMount () {

        const response = await fetch(`${process.env.REACT_APP_LARAVEL}/api/lugares/${this.props.match.params.id}`);
            const data = await response.json();
            this.setState({
                lugares: data.data
            });
        console.log(this.state.lugares)
    }

    ponerLugares = () => {

        if (this.state.lugares.length)
            return this.state.lugares.map( lugar => {
                console.log(lugar)
                return (
                    <Lugar 
                        lugar={lugar} 
                    />
                );
            });
        else {
            return <h2 style={{color: '#333'}}>No hay lugares para mostrar.</h2>
        }
    }

    render () {
        return (
            <div className="LugaresPage">
                <Link to="/">
                    <div className="LugaresPage-regresar">
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

export default LugaresPage;