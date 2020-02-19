import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class agregarZona extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            form: {
                latitud: '',
                longitud: '',
                nombre: '',
                cargo: '',
                descripcion: '',
            },
            errores: {
                latitud: '',
                longitud: '',
                nombre: '',
                cargo: '',
                descripcion: ''
            },
            alerta: {
                titulo: '',
                cuerpo: '',
                extra: '',
                tipo: '',
            },
            toHome:false,
            cargando:false,
            cargandoTexto:'Agregar Zona',
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            cargando:true,
            cargandoTexto:' agregando...'
        });
        try {
            const response = await fetch( 
                `${process.env.REACT_APP_LARAVEL}/api/zona`, 
                { 
                    method: 'POST', 
                    body: JSON.stringify(this.state.form) 
                } 
            );
    
            const respuesta = await response.json();
            console.log("El formulario respondio con ", respuesta);

            if ( respuesta.success ) {
                alert("Agregado con éxito");
                this.setState({
                    cargando:false,
                    toHome:true,
                    cargandoTexto:'Agregar Zona',
                    alerta: {
                        ...this.state.alerta,
                        tipo: 'alert-success',
                        titulo: respuesta.message,
                        cuerpo: '',
                        extra: ''
                    },
                    errores: {
                        ...this.state.errores,
                        descripcion: '',
                        nombre: '',
                        latitud: '',
                        longitud: ''
                    },
                });
            } else {
                var e_nombre = respuesta.message.nombre ? respuesta.message.nombre : "";
                var e_descripcion = respuesta.message.descripcion ? respuesta.message.descripcion : "";
                var e_latitud = respuesta.message.latitud ? respuesta.message.latitud : "";
                var e_longitud = respuesta.message.longitud ? respuesta.message.longitud : "";
                this.setState({
                    cargando:false,
                    cargandoTexto:'Agregar Zona',
                    errores: {
                        ...this.state.errores,
                        descripcion: e_descripcion,
                        nombre: e_nombre,
                        latitud: e_latitud,
                        longitud: e_longitud
                    },
                    alerta: {
                        ...this.state.alerta,
                        tipo: 'alert-danger',
                        titulo: respuesta.error,
                        cuerpo: '',
                        extra: ''
                    }
                });
            }
        } catch (error) {
            alert("Error");
            this.setState({
                cargando:false,
                cargandoTexto:'Agregar Zona',
                alerta: {
                    ...this.state.alerta,
                    tipo: 'alert-danger',
                    titulo: 'Caught an error.',
                    cuerpo: error.message,
                    extra: error.name
                },
                errores: {
                    ...this.state.errores,
                    descripcion: '',
                    nombre: '',
                    latitud: '',
                    longitud: ''
                },
            });
            console.log("<Error handleLoguear componente 'agregarZona'>");
            console.log(error);
            console.log("<Error handleLoguear componente 'agregarZona'/>");
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }

    formulario () {
        return (
            <div className="container-sm">
                <h1>Agregue <span className="badge badge-secondary">Zona</span></h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/admin/home">Home</Link></li>
                      <li className="breadcrumb-item"><Link to="/admin/zona">Zonas</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Nuevo</li>
                    </ol>
                </nav>
                { this.state.alerta.tipo === '' ? null : (
                    <div className={"alert " + this.state.alerta.tipo} role="alert">
                        <h4 className="alert-heading">{this.state.alerta.titulo}</h4>
                        <p>{this.state.alerta.cuerpo}</p>
                        <hr />
                        <p className="mb-0">{this.state.alerta.extra}</p>
                    </div>
                ) }
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="InputLatitud">Latitud</label>
                                <input type="text" className={ this.state.errores.latitud === '' ? "form-control" : "form-control is-invalid" } id="InputLatitud" name='latitud' onChange={this.handleChange} value={this.state.form.latitud} required />
                                <div className={ this.state.errores.latitud === '' ? "" : "invalid-feedback" } >
                                    {this.state.errores.latitud}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="InputLongitud">longitud</label>
                                <input type="text" className={ this.state.errores.longitud === '' ? "form-control" : "form-control is-invalid" } id="InputLongitud" name='longitud' onChange={this.handleChange} value={this.state.form.longitud} required />
                                <div className={ this.state.errores.longitud === '' ? "" : "invalid-feedback" } >
                                    {this.state.errores.longitud}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col-12 col-md-6'>
                            <div className="form-group">
                                <label htmlFor="InputNombre">Nombre</label>
                                <input type="text" className={ this.state.errores.nombre === '' ? "form-control" : "form-control is-invalid" } id="InputNombre" name='nombre' onChange={this.handleChange} value={this.state.form.nombre} required />
                                <div className={ this.state.errores.nombre === '' ? "" : "invalid-feedback" } >
                                    {this.state.errores.nombre}
                                </div>
                            </div>
                        </div>                        
                        <div className='col-12 col-md-6'>
                            <div className="form-group">
                                <label htmlFor="cargoSelect">Cargo</label>
                                <select className="form-control" id="cargoSelect" name='cargo' onChange={this.handleChange} value={this.state.form.cargo} required aria-describedby="cargoHelp" >
                                    <option value="">Seleccione un cargo...</option> 
                                    <option value="Pais">País</option>
                                    <option value="Provincia">Provincia</option>
                                    <option value="Canton">Cantón</option>
                                    <option value="Parroquia">Parroquia</option>
                                    <option value="Parroquia Rural">Parroquia Rural</option>
                                    <option value="Parroquia Urbana">Parroquia Urbana</option>
                                </select>
                                <small id="cargoHelp" className="form-text text-muted">{this.state.errores.cargo}</small>
                            </div>
                        </div>                                        
                    </div>
 
                    <div className="form-group">
                        <label htmlFor="descripcionTextarea">Descripción</label>
                        <textarea className={ this.state.errores.descripcion === '' ? "form-control" : "form-control is-invalid" } id="descripcionTextarea" rows="3" name='descripcion' onChange={this.handleChange} value={this.state.form.descripcion} required></textarea>
                        <div className={ this.state.errores.descripcion === '' ? "" : "invalid-feedback" } >
                            {this.state.errores.descripcion}
                        </div>
                    </div>

                    <button className="btn btn-primary" type="submit" disabled={this.state.cargando} >
                        <span className={ this.state.cargando ? 'spinner-border spinner-border-sm' : ''} role="status"></span>
                        {this.state.cargandoTexto}
                    </button>
                </form>
            </div>
        );
    }

    render () {
        return (
            <>
            { this.state.toHome ? <Redirect to="/admin/zona" /> : null }
            { this.formulario() }
            </>
        );
    }

}

export default agregarZona;