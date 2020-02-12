import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class agregarLugar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            toHome:false,
            form: {
                nombre:'',
                descripcion: '',
                altura_sobre_nivel_del_mar:'',
                latitud: '',
                longitud: '',
                imagen: '',
                ID_zona: '',
            },
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
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
        } catch (error) {
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

    comboZonas () {
        return(
            <option value='1'>1</option>
        );
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
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="InputNombre">Nombre</label>
                        <input className="form-control" type="text" id="InputNombre" name='nombre' onChange={this.handleChange} value={this.state.form.nombre} required aria-describedby="nombreHelp" />
                        <small id="nombreHelp" className="form-text text-muted"></small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcionTextarea">Descripción</label>
                        <textarea className="form-control" id="descripcionTextarea" rows="3" name='descripcion' onChange={this.handleChange} value={this.state.form.descripcion} required ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputASNM">Altura sobre el nivel del mar</label>
                        <input className="form-control" type="text" id="InputASNM" name="altura_sobre_nivel_del_mar" onChange={this.handleChange} value={this.state.form.altura_sobre_nivel_del_mar} required/>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <div className="form-group">
                                <label htmlFor="InputLatitud">Latitud</label>
                                <input className="form-control" type="text" id="InputLatitud" name="latitud" onChange={this.handleChange} value={this.state.form.latitud} required/>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="form-group">
                                <label htmlFor="InputLongitud">Longitud</label>
                                <input className="form-control" type="text" id="InputLongitud" name="longitud" onChange={this.handleChange} value={this.state.form.longitud} required/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="InputImagen">Imagen</label>
                        <input type="file" class="form-control-file" id="InputImagen" name='imagen' />
                    </div>
                    <div className="form-group">
                    <label htmlFor="ID_zona">Zonas</label>
                        <select className="form-control" id="ID_zona" name="ID_zona" onChange={this.handleChange} value={this.state.form.ID_zona} required>
                            <option value="">Seleccione una zona...</option> 
                            { this.comboZonas() }
                        </select>    
                    </div>
                    <button type="button" className="btn btn-primary">Agregar Lugar</button>
                </form>
            </div>
        );
    }

    render () {
        return (
            <>
            {this.state.toHome ? <Redirect to="/admin/lugar" /> : null}
            {this.formulario()}
            </>
        );
    }

}

export default agregarLugar;