import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

class ZonaTable extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            zonas:[],
        }
    }

    componentDidMount () {
        this.llamar_listar();
    }

    async llamar_listar () {
        try {
            const response = await fetch( 
                `${process.env.REACT_APP_LARAVEL}/api/zona`, 
                { 
                    method: 'GET'
                } 
            );
            const respuesta = await response.json();
            if (response.ok) {
                this.setState({
                    zonas : respuesta.data
                });
            } else {
                this.setState({
                    zonas : []
                });
                console.log("Error " + response.statusText + " estado es " + response.status);
            }
        } catch (error) {
            this.setState({
                zonas : []
            });
            console.log("<Error handleLoguear componente clase 'ZonaTable'>");
            console.log(error);
            console.log("<Error handleLoguear componente clase 'ZonaTable'/>");
        }
    }

    listar () {
        if (this.state.zonas.length > 0) {
            return this.state.zonas.map(
                (e, i) => 
                <tr key={i}>
                    <th scope="row">{e.Id}</th>
                    <td>{e.Lugar}</td>
                    <td>{e.nivel_superior}</td>
                    <td>
                        <RouterLink to={`/admin/zona/modificar/${e.Id}`}>
                            Editar
                        </RouterLink>
                    </td>
                </tr>
            );
        } else {
            return null;
        }
    }

    cargando () {
        return (
            <tr>
                <th scope="row">
                    <img src="/ajax-loader.gif" alt="gif de un pacman :v" />
                </th>
            </tr>
        );
    }

    tabla () {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre del lugar</th>
                        <th scope="col">Nivel Administrativo Superior</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { this.listar()==null ? this.cargando() : this.listar() }
                </tbody>
            </table>
        );
    }
    render () {
        return ( this.tabla() );
    }
}

export default ZonaTable;