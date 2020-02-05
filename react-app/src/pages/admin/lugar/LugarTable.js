import React from 'react';
import { Link } from 'react-router-dom';

class LugarTable extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            lugares:[],
        }
    }

    listar () {
        if (this.state.lugares.length > 0) {
            return this.state.lugares.map(
                (e, i) => 
                <tr key={i}>
                    <td>{e.nombre}</td>
                    <td>{e.descripcion}</td>
                    <td>{e.altura_sobre_nivel_del_mar}</td>
                    <td>{e.latitud}</td>
                    <td>{e.nombre}</td>
                    <td>{e.nombre}</td>
                    <td>{e.nombre}</td>
                    <td>
                        <Link to={`/admin/lugar/modificar/${e.id}`}>
                            Editar
                        </Link>
                    </td>
                </tr>
            );
        }
    }

    cargando () {
        return (
            <tr>
                <td colSpan="8">
                    <img src="/ajax-loader.gif" alt="gif de un pacman :v" />
                </td>
            </tr>
        );
    }

    tabla () {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Altura sobre nivel del mar</th>
                        <th>Latitud</th>
                        <th>Longitud</th>
                        <th>Imagen</th>
                        <th>ID Zona</th>
                        <th>Acciones</th>
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

export default LugarTable;