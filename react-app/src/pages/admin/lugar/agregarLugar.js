import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class agregarLugar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            zonas:[],
            form: {
                nombre:'',
                descripcion: '',
                altura_sobre_nivel_del_mar:'',
                latitud: '',
                longitud: '',
                imagen: '',
                ID_zona: '',
            },
            errores: {
                nombre:'',
                descripcion: '',
                altura_sobre_nivel_del_mar:'',
                latitud: '',
                longitud: '',
                imagen: '',
                ID_zona: '',
            },
            alerta: {
                titulo: '',
                cuerpo: '',
                extra: '',
                tipo: '',
            },
            toHome:false,
            cargando:false,
            cargandoTexto:'Agregar Lugar',
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
                `${process.env.REACT_APP_LARAVEL}/api/lugar`, 
                    { 
                        method: 'POST',
                        body: JSON.stringify(this.state.form)
                    }
            );

            const respuesta = await response.json();
            console.log("El formulario respondio con ", respuesta);
            if ( respuesta.success ) {
                this.setState({
                    cargando:false,
                    toHome:true,
                    cargandoTexto:'Agregar Lugar',
                    alerta: {
                        ...this.state.alerta,
                        tipo: 'alert-success',
                        titulo: respuesta.message,
                        cuerpo: '',
                        extra: ''
                    },
                    errores: {
                        ...this.state.errores,
                        nombre:'',
                        descripcion: '',
                        altura_sobre_nivel_del_mar:'',
                        latitud: '',
                        longitud: '',
                        imagen: '',
                        ID_zona: '',
                    },
                });
            } else {
                var e_nombre = respuesta.message.nombre ? respuesta.message.nombre : "";
                var e_descripcion = respuesta.message.descripcion ? respuesta.message.descripcion : "";
                var e_latitud = respuesta.message.latitud ? respuesta.message.latitud : "";
                var e_longitud = respuesta.message.longitud ? respuesta.message.longitud : "";
                var e_imagen = respuesta.message.imagen ? respuesta.message.imagen : "";
                var e_ID_zona = respuesta.message.ID_zona ? respuesta.message.ID_zona : "";
                var e_altura_sobre_nivel_del_mar = respuesta.message.altura_sobre_nivel_del_mar ? respuesta.message.altura_sobre_nivel_del_mar : "";
                this.setState({
                    cargando:false,
                    cargandoTexto:'Agregar Lugar',
                    errores: {
                        ...this.state.errores,
                        nombre: e_nombre,
                        descripcion: e_descripcion,
                        altura_sobre_nivel_del_mar: e_altura_sobre_nivel_del_mar,
                        latitud: e_latitud,
                        longitud: e_longitud,
                        imagen: e_imagen,
                        ID_zona: e_ID_zona
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
                cargandoTexto:'Agregar Lugar',
                alerta: {
                    ...this.state.alerta,
                    tipo: 'alert-danger',
                    titulo: 'Caught an error.',
                    cuerpo: error.message,
                    extra: error.name
                },
                errores: {
                    ...this.state.errores,
                    nombre:'',
                    descripcion: '',
                    altura_sobre_nivel_del_mar:'',
                    latitud: '',
                    longitud: '',
                    imagen: '',
                    ID_zona: '',
                },
            });
            console.log("<Error handleLoguear componente 'agregarLugar'>");
            console.log(error);
            console.log("<Error handleLoguear componente 'agregarLugar'/>");
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
    componentDidMount () {
        this.comboZonas();
    }

    async comboZonas () {
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
            });
        } else {
            this.setState({
                zonas : [],
            });
            console.log("Error " + response.statusText + " estado es " + response.status);
        }
    }

    formulario () {
        return (
            <div className="container-sm">
                <h1>Agregue <span className="badge badge-secondary">Lugar</span></h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/admin/home">Home</Link></li>
                      <li className="breadcrumb-item"><Link to="/admin/lugar">Lugares</Link></li>
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
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div className="form-group">
                                <label htmlFor="InputNombre">Nombre</label>
                                <input className={ this.state.errores.nombre === '' ? "form-control" : "form-control is-invalid" } type="text" id="InputNombre" name='nombre' onChange={this.handleChange} value={this.state.form.nombre} required />
                                <div className={ this.state.errores.nombre === '' ? "" : "invalid-feedback" } >
                                    {this.state.errores.nombre}
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className="form-group">
                                <label htmlFor="InputASNM">Altura sobre el nivel del mar</label>
                                <input className={ this.state.errores.altura_sobre_nivel_del_mar === '' ? "form-control" : "form-control is-invalid" } type="text" id="InputASNM" name="altura_sobre_nivel_del_mar" onChange={this.handleChange} value={this.state.form.altura_sobre_nivel_del_mar} required/>
                                <div className={ this.state.errores.altura_sobre_nivel_del_mar === '' ? "" : "invalid-feedback" } >
                                    {this.state.errores.altura_sobre_nivel_del_mar}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="descripcionTextarea">Descripción</label>
                        <textarea className={ this.state.errores.descripcion === '' ? "form-control" : "form-control is-invalid" } id="descripcionTextarea" rows="3" name='descripcion' onChange={this.handleChange} value={this.state.form.descripcion} required ></textarea>
                        <div className={ this.state.errores.descripcion === '' ? "" : "invalid-feedback" } >
                            {this.state.errores.descripcion}
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div className="form-group">
                                <label htmlFor="InputLatitud">Latitud</label>
                                <input className={ this.state.errores.latitud === '' ? "form-control" : "form-control is-invalid" } type="text" id="InputLatitud" name="latitud" onChange={this.handleChange} value={this.state.form.latitud} required/>
                                <div className={ this.state.errores.latitud === '' ? "" : "invalid-feedback" } >
                                    {this.state.errores.latitud}
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className="form-group">
                                <label htmlFor="InputLongitud">Longitud</label>
                                <input className={ this.state.errores.longitud === '' ? "form-control" : "form-control is-invalid" } type="text" id="InputLongitud" name="longitud" onChange={this.handleChange} value={this.state.form.longitud} required/>
                                <div className={ this.state.errores.longitud === '' ? "" : "invalid-feedback" } >
                                    {this.state.errores.longitud}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="InputImagen">Imagen</label>
                        <input type="text" className={ this.state.errores.imagen === '' ? "form-control" : "form-control is-invalid" } id="InputImagen" name='imagen' onChange={this.handleChange} value={this.state.form.imagen} />
                        <div className={ this.state.errores.imagen === '' ? "" : "invalid-feedback" }>
                            {this.state.errores.imagen}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="ID_zona">Zonas</label>
                        <select className={ this.state.errores.ID_zona === '' ? "form-control custom-select" : "form-control custom-select is-invalid" } id="ID_zona" name="ID_zona" onChange={this.handleChange} value={this.state.form.ID_zona} required>
                            <option value="">Seleccione una zona...</option>
                            { this.state.zonas.map( (e, i)=><option key={i} value={e.Id} >{ e.Lugar } { e.nivel_superior ? e.nivel_superior : '' }</option> )  }
                        </select>
                        <div className={ this.state.errores.ID_zona === '' ? "" : "invalid-feedback" } >
                            {this.state.errores.ID_zona}
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
            { this.state.toHome ? <Redirect to="/admin/lugar" /> : null }
            { this.formulario() }
            </>
        );
    }

}

export default agregarLugar;