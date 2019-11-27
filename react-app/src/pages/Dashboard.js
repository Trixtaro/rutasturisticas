import React from 'react';
import { Link } from 'react-router-dom';

import Buscador from '../components/Buscador'

import './styles/Dashboard.css'

class Dashboard extends React.Component{

    render(){
        return (
            <React.Fragment>
                <div className="Dashboard">
                    <div className="hero">
                        <Buscador placeholder="Escriba su lugar de destino (Ciudad, País, Lugar, etc)" />    
                        <p>
                          Encuentra los mejores guias locales en lus lugares que deseas conocer. <br/> <br/>
                          Elige el que más te guste y ten un viaje inolvidable.  
                        </p>
                    </div>
                    <div className="foto">
                        
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default Dashboard;