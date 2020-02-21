import React from 'react';
import Buscador from '../components/Buscador';
import Lugar from '../components/Lugar';
import montecristi from '../images/montecristi.jpg';
import portoviejo from '../images/portoviejo.jpg';
import manta from '../images/manta.jpg';
import './styles/Dashboard.css';
import { Link } from 'react-router-dom';
import { getProfile } from '../functions/Functions';

class Dashboard extends React.Component {
    state = {
        recomendaciones: [],
        usuario: null,
        persona: null,
        admin: false,
    }

    async componentDidMount () {
        const response = await fetch(`${process.env.REACT_APP_LARAVEL}/api/lugares/3`);
        console.log("el fetch en Dashboard@componentDidMount dio ", response);
        const data = await response.json();
        console.log("el data de responsae JSON en Dashboard@componentDidMount dio ", data);
        const dataProfile = await getProfile();
        if (dataProfile === 'token_expired' || dataProfile === 'token_invalid' ) {
            localStorage.removeItem('usertoken');
            console.log('Se removio el token en Dashboard@componentDidMount');
            this.setState({
                ...this.state,
                usuario: null,
                persona: null,
                admin: false,
            })

            return;
        }

        this.setState({
            recomendaciones: data.data,
            usuario: dataProfile.usuario,
            persona: dataProfile.persona,
            admin: dataProfile.admin,
        });
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
                        { this.state.usuario ? (
                            this.state.usuario.guias.length > 0 ? (
                                <div>
                                    <h3>
                                        Respuesta de nosotros
                                        { this.state.usuario.guias[0].estado === 'H' ? (<span role='img' arial-label='Emoji de aceptacion'>😀</span>) : (
                                            this.state.usuario.guias[0].estado === 'R' ? (<span role='img' arial-label='Emoji de rechazo'>😕</span>) : ''
                                        ) }
                                    </h3>
                                    <p>{this.state.usuario.guias[0].feedback}</p>
                                    <hr />
                                </div>
                            ) : (
                                <div>
                                    <h3>¿Eres guía?</h3>
                                    <p>Unete a nosotros para poder ser guía. <Link to={`/solicitudes/guia/${this.state.usuario.ID_usuario}`}>Ir ...</Link></p>
                                    <hr />
                                </div>
                            )
                        ) : null }
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
                { this.state.recomendaciones.map( lugar => 
                    <Lugar key={lugar.id} lugar={lugar} />
                )}
            </div>
            </div>
        );
    }
}

export default Dashboard;