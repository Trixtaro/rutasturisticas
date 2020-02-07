import React from 'react';
import { Redirect } from 'react-router-dom';
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
            <form onSubmit={this.handleSubmit}>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Latitud</span>
                    </div>
                    <input type="text" id="latitud" name="latitud" onChange={this.handleChange} value={this.state.form.latitud} required/>
                    
                </div>

                
                <div className="field">
                    <input type="text" id="longitud" name="longitud" placeholder="Longitud"  onChange={this.handleChange} value={this.state.form.longitud} required/>
                </div>
                <div className="field">
                    <input type="text" id="nombre" name="nombre" placeholder="Nombre"  onChange={this.handleChange} value={this.state.form.nombre} required/>
                </div>
                <div className="field">
                    <select id="cargo" name="cargo" placeholder="Cargo" onChange={this.handleChange} value={this.state.form.cargo} required>
                        <option value="">Seleccione un cargo...</option> 
                        <option value="Pais">País</option>
                        <option value="Provincia">Provincia</option>
                        <option value="Canton">Cantón</option>
                        <option value="Parroquia">Parroquia</option>
                        <option value="Parroquia Rural">Parroquia Rural</option>
                        <option value="Parroquia Urbana">Parroquia Urbana</option>
                    </select>
                </div>
                <div className="field">
                    <input type="text" id="descripcion" name="descripcion" placeholder="Descripción"  onChange={this.handleChange} value={this.state.form.descripcion} required/>
                </div>
                <button className="boton">Agregar Lugares</button>
            </form>
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