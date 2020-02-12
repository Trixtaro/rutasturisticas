import React from 'react';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

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
                descripcion: ''
            },
        }
    }

    handleSubmit = async (e) => {
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
        } catch (error) {
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
                <h1>Agregue <span class="badge badge-secondary">Zona</span></h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><Link to="/admin/home">Home</Link></li>
                      <li class="breadcrumb-item"><Link to="/admin/zona">Zonas</Link></li>
                      <li class="breadcrumb-item active" aria-current="page">Nuevo</li>
                    </ol>
                </nav>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <div class="form-group">
                                <label for="InputLatitud">Latitud</label>
                                <input type="text" class="form-control" id="InputLatitud" onChange={this.handleChange} value={this.state.form.latitud} required aria-describedby="latitudHelp" />
                                <small id="latitudHelp" class="form-text text-muted"></small>
                            </div>
                        </div>
                        <div className="col">
                            <div class="form-group">
                                <label for="InputLongitud">longitud</label>
                                <input type="text" class="form-control" id="InputLongitud" onChange={this.handleChange} value={this.state.form.longitud} required aria-describedby="longitudHelp" />
                                <small id="longitudHelp" class="form-text text-muted"></small>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col'>
                            <div class="form-group">
                                <label for="InputNombre">Nombre</label>
                                <input type="text" class="form-control" id="InputNombre" onChange={this.handleChange} value={this.state.form.nombre} required onChange={this.handleChange} value={this.state.form.longitud} required aria-describedby="nombreHelp" />
                                <small id="nombreHelp" class="form-text text-muted"></small>
                            </div>
                        </div>                        
                        <div className='col'>
                            <div class="form-group">
                                <label for="cargoSelect">Cargo</label>
                                <select class="form-control" id="cargoSelect" onChange={this.handleChange} value={this.state.form.cargo} required >
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
 
                    <div class="form-group">
                        <label for="descripcionTextarea">Descripción</label>
                        <textarea class="form-control" id="descripcionTextarea" rows="3" onChange={this.handleChange} value={this.state.form.descripcion} required ></textarea>
                    </div>

                    <button type="button" className="btn btn-primary">Agregar Zona</button>
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