import React from 'react';
import { Link } from 'react-router-dom';
import Buscador from '../components/Buscador';
import './styles/LugaresPage.css';
import Lugar from '../components/Lugar';
import Guia from '../components/Guia';

class LugaresPage extends React.Component {
    state = {
        lugares: [],
        guiasH: [],
    }

    async componentDidMount () {
        const response = await fetch(`${process.env.REACT_APP_LARAVEL}/api/lugares/${this.props.match.params.id}`);
        const data = await response.json();
        console.log(this.state.lugares)
        const responseGuiasH = await fetch(`${process.env.REACT_APP_LARAVEL}/api/guia/filtro/estado/H`);
        console.log('El fetch LugaresPage@componentDidMount responseGuiasH', responseGuiasH);
        const dataGuiasH = await responseGuiasH.json();
        console.log('La respuesta LugaresPage@componentDidMount dataGuiasH', dataGuiasH);
        this.setState({
            lugares: data.data
        });
        if ( responseGuiasH.ok ) {
            if (dataGuiasH.success){
                this.setState({
                    guiasH: dataGuiasH.data.guia
                });
            } else {
                
            }
        } else {
            console.log("Error LugaresPage@componentDidMount " + response.statusText + " estado es " + response.status);
        }
    }

    ponerLugares = () => {
        if (this.state.lugares.length)
            return this.state.lugares.map( lugar => {
                return (
                    <Lugar key={lugar.id}
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
                        <i className="fas fa-undo-alt"></i>
                        &nbsp;
                        Regresar
                    </div>
                </Link>
                <h1 className="titulo-lugares">
                    Resultados de la búsqueda de lugares...
                </h1>
                <Buscador placeholder="Escriba su lugar de destino (Ciudad, País, Lugar, etc)" />    
                <div className="lugares">
                    { this.ponerLugares() }
                </div>
                <h2 className="titulo-guias">Guias recomendados</h2>
                <div className="guias">
                { this.state.guiasH.map( (e, i) => {
                    if (e.ID_zona) {
                        if (e.ID_zona == this.props.match.params.id ) {
                            return <Guia 
                                key={i}
                                foto={ (e.persona.cedula === '1310770589') ? '/cinthya.jpeg' : (
                                    e.persona.cedula === '1310172729' ? '/marcillo.jpeg' : (
                                        e.persona.cedula === '1315634806' ? '/gema.jpeg' : 'https://source.unsplash.com/64x64/?woman,man'
                                    )
                                ) }
                                nombres={e.persona.nombres}
                                titulo={(e.titulo) ? e.titulo : 'Sin título'}
                                estrellas={5}
                                descripcion={e.descripcion}
                            />
                        }
                    }
                })}
                </div>
            </div>
        );
    }
}

export default LugaresPage;