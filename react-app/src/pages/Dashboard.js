import React from 'react';
import Buscador from '../components/Buscador';
import Lugar from '../components/Lugar';
import montecristi from '../images/montecristi.jpg';
import portoviejo from '../images/portoviejo.jpg';
import manta from '../images/manta.jpg';
import './styles/Dashboard.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Dashboard extends React.Component {
    state = {
        recomendaciones: []
    }

    async componentDidMount(){
        const response = await fetch(`${process.env.REACT_APP_LARAVEL}/api/lugares/3`);
        const data = await response.json();
        this.setState({
            recomendaciones: data.data
        });
    }

    render () {
        return (
            <div className="container-fluid Dashboard">
                <div className='row pb-3'>
                    <div className='col-12 col-sm-9'>
                        <h1 className="display-1">Rutas Turísticas</h1>
                        <h3>
                            Encuentra tu guía turistico
                            <small className="text-muted"> para ese viaje que tanto deseas.</small>
                        </h3>
                        <div className="Dashboard-buscador">
                            <Buscador placeholder="Busca tus lugares preferidos..." />
                        </div>
                        <div>
                            <h2 className="titulo-lugares">
                                Los lugares más visitados del mes
                            </h2>
                            <div className="card-deck">
                                <Lugar
                                    url="/lugares/27"
                                    lugar= { {
                                        nombre: "Portoviejo",
                                        foto: portoviejo,
                                        descripcion: "La capital de los manabitas."
                                    } }  
                                />
                                <Lugar
                                    url="/lugares/28"
                                    lugar= { {
                                        nombre: "Manta",
                                        foto: manta,
                                        descripcion: "Principal puerto atunero del mundo."
                                    } }
                                />
                                <Lugar
                                    url="/lugares/37"
                                    lugar= { {
                                        nombre: "Montecristi",
                                        foto: montecristi,
                                        descripcion: "La cuna de Eloy Alfaro, y artesanias como el sombrero de paja toquilla."
                                    } }
                                /> 
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-3'>
                        <div className='recomendaciones mt-3'>
                            <h2 className="titulo">Recomendaciones</h2>
                            { this.state.recomendaciones.map( lugar => 
                                <Lugar key={lugar.id} lugar={lugar} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;