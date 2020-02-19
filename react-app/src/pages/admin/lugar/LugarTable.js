import React from 'react';
import { Link } from 'react-router-dom';

class LugarTable extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            lugares:[],
            alerta: {
                titulo: '',
                cuerpo: '',
                extra: '',
                tipo: '',
            },
        }
    }

    listar () {
        if (this.state.lugares.length > 0) {
            return this.state.lugares.map(
                (e, i) => 
                <tr key={i}>
                    <th scope="row">{e.nombre}</th>
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
                <th scope="row">
                    <img src="/ajax-loader.gif" alt="gif de un pacman :v" />
                </th>
            </tr>
        );
    }

    tabla () {
        return (
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Altura sobre nivel del mar</th>
                        <th scope="col">Latitud</th>
                        <th scope="col">Longitud</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">ID Zona</th>
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
        return ( 
            <>
            { this.state.alerta.tipo === '' ? null : (
                <div className={"alert " + this.state.alerta.tipo} role="alert">
                    <h4 className="alert-heading">{this.state.alerta.titulo}</h4>
                    <p>{this.state.alerta.cuerpo}</p>
                    <hr />
                    <p className="mb-0">{this.state.alerta.extra}</p>
                </div>
            ) }
            { this.tabla() }
            </>
         );
    }
}

export default LugarTable;