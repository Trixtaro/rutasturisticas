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
        console.log(this.state.lugares)
    }

    render () {
        return (
            <div className="Dashboard">
                <div className="principal">
                <div className="hero">
                    <h1>Rutas Turísticas</h1> 
                    <p>Encuentra tu guía  turistico <br /> para ese viaje que tanto deseas.</p>
                    <div className="Dashboard-buscador">
                        <Buscador placeholder="Busca tus lugares preferidos..." />
                    </div>
                    <div>
                        <h2 className="titulo-lugares">
                            Los lugares más visitados del mes
                        </h2>
                        <div className="Dashboard-lugares">
                            <Lugar 
                                url="/lugares/27"
                                lugar={ {
                                    nombre: "Portoviejo",
                                    foto: portoviejo,
                                    descripcion: "La capital de los manabitas."
                                } }  
                            />
                            <Lugar 
                                url="/lugares/28"
                                lugar={ {
                                    nombre: "Manta",
                                    foto: manta,
                                    descripcion: "Principal puerto atunero del mundo."
                                } }
                            />
                            <Lugar 
                                url="/lugares/37"
                                lugar={ {
                                    nombre: "Montecristi",
                                    foto: montecristi,
                                    descripcion: "La cuna de Eloy Alfaro, y artesanias como el sombrero de paja toquilla."
                                } }
                            />  
                        </div>
                    </div>
                    <div className="points">
                        <div className="point"></div>
                        <div className="point selected"></div>
                        <div className="point"></div>
                    </div>
                </div>
            </div>
            <div className="recomendaciones">
                <h2 className="titulo">Recomendaciones</h2>
                {
                    this.state.recomendaciones.map( lugar => 
                        <Lugar lugar={lugar} />
                    )
                }
            </div>
            </div>
        );
    }
}

export default Dashboard;