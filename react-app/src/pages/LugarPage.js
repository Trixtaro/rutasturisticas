import React from 'react';
import './styles/LugarPage.css';

class LugarPage extends React.Component {
    state = {
        lugar: null
    }

    async componentDidMount(){
        const response = await fetch(`${process.env.REACT_APP_LARAVEL}/api/lugar/${this.props.match.params.id}`);
        this.setState({
            lugar: await response.json()
        });

        this.ponerMapa()
    }

    ponerMapa = () => {
        const zoom = 14;

        try{
            var map = window.L.map('map').setView([this.state.lugar.latitud, this.state.lugar.longitud], zoom);
    
            const addLayerMap = (map) => {
                window.layer = window.L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                    maxZoom: 18,
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                        'Imagery Â© <a href="https://www.mapbox.com/">Mapbox</a>',
                    id: 'mapbox.streets'
                }).addTo(map);
            }
    
            addLayerMap(map);
    
            window.L.marker([this.state.lugar.latitud, this.state.lugar.longitud]).addTo(map)
                .bindPopup(this.state.lugar.nombre)
                .openPopup();
            
        } catch (error){

        }

    }

    render () {
        if ( !this.state.lugar )
            return (<div className="LugarPage">
                Cargando
            </div>);

        return (<div className="LugarPage">
            
            <div className="body">
                <figure className="imagen">
                    <img src={this.state.lugar.imagen} alt=""/>
                </figure>
                <div className="info">
                    <div>
                        <h1 className="nombre-lugar">
                            {this.state.lugar.nombre}
                        </h1>
                        <p className="descripcion">
                            {this.state.lugar.descripcion}
                        </p>
                    </div>
                    <div id="map" ></div>
                </div>
            </div>
        </div>);
    }
}

export default LugarPage;