import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class agregarZona extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            toHome:false,
            form: {
                latitud: '',
                longitud: '',
                nombre: '',
                cargo: '',
                descripcion: '',
                e_descripcion: ''
            },
            cargando:false,
            cargandoTexto:'Agregar Zona',
        }
    }

    handleSubmit = async (e) => {
        this.setState({
            cargando:true,
            cargandoTexto:' agregando...'
        });
        e.preventDefault();
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
                this.setState({
                    cargando:false,
                    cargandoTexto:'Agregar Zona'
                });
            } else {
                alert("Error");
                this.setState({
                    cargando:false,
                    cargandoTexto:'Agregar Zona',
                    form: {
                        ...this.state.form,
                        e_descripcion : respuesta.message.descripcion
                    }
                });
            }
    
        } catch (error) {
            this.setState({
                cargando:false,
                cargandoTexto:'Agregar Zona'
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
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="InputLatitud">Latitud</label>
                                <input type="text" className="form-control" id="InputLatitud" name='latitud' onChange={this.handleChange} value={this.state.form.latitud} required aria-describedby="latitudHelp" />
                                <small id="latitudHelp" className="form-text text-muted"></small>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="InputLongitud">longitud</label>
                                <input type="text" className="form-control" id="InputLongitud" name='longitud' onChange={this.handleChange} value={this.state.form.longitud} required aria-describedby="longitudHelp" />
                                <small id="longitudHelp" className="form-text text-muted"></small>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col'>
                            <div className="form-group">
                                <label htmlFor="InputNombre">Nombre</label>
                                <input type="text" className="form-control" id="InputNombre" name='nombre' onChange={this.handleChange} value={this.state.form.nombre} required aria-describedby="nombreHelp" />
                                <small id="nombreHelp" className="form-text text-muted"></small>
                            </div>
                        </div>                        
                        <div className='col'>
                            <div className="form-group">
                                <label htmlFor="cargoSelect">Cargo</label>
                                <select className="form-control" id="cargoSelect" name='cargo' onChange={this.handleChange} value={this.state.form.cargo} required >
                                    <option value="">Seleccione un cargo...</option> 
                                    <option value="Pais">País</option>
                                    <option value="Provincia">Provincia</option>
                                    <option value="Canton">Cantón</option>
                                    <option value="Parroquia">Parroquia</option>
                                    <option value="Parroquia Rural">Parroquia Rural</option>
                                    <option value="Parroquia Urbana">Parroquia Urbana</option>
                                </select>
                            </div>
                        </div>                                        
                    </div>
 
                    <div className="form-group">
                        <label htmlFor="descripcionTextarea">Descripción</label>
                        <textarea className="form-control" id="descripcionTextarea" rows="3" name='descripcion' onChange={this.handleChange} value={this.state.form.descripcion} required aria-describedby="descripcionHelp" ></textarea>
                        <small id="descripcionHelp" className="form-text text-muted">{this.state.form.e_descripcion}</small>
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
            {this.state.toHome ? <Redirect to="/admin/zona" /> : null}
            {this.formulario()}
            </>
        );
    }

}

export default agregarZona;