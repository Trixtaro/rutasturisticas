import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

class ZonaTable extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            zonas:[],
            alerta: {
                titulo: '',
                cuerpo: '',
                extra: '',
                tipo: '',
            },
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
                    zonas : respuesta.data,
                    alerta: {
                        ...this.state.alerta,
                        tipo: '',
                        titulo: '',
                        cuerpo: '',
                        extra: ''
                    },
                });
            } else {
                this.setState({
                    zonas : [],
                    alerta: {
                        ...this.state.alerta,
                        tipo: 'alert-danger',
                        titulo: 'Caught an error.',
                        cuerpo: response.status,
                        extra: response.statusText
                    },
                });
                console.log("Error " + response.statusText + " estado es " + response.status);
            }
        } catch (error) {
            alert("error");
            this.setState({
                zonas : [],
                alerta: {
                    ...this.state.alerta,
                    tipo: 'alert-danger',
                    titulo: 'Caught an error.',
                    cuerpo: error.message,
                    extra: error.name
                },
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
            <table className="table table-hover table-dark">
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

export default ZonaTable;