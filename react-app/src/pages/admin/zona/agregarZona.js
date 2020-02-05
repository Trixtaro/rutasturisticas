import React from 'react';
import { Redirect } from 'react-router-dom';

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

    formulario () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field">
                    <input type="text" id="latitud" name="latitud" placeholder="Latitud" onChange={this.handleChange} value={this.state.form.latitud} required/>
                </div>
                <div className="field">
                    <input type="text" id="longitud" name="longitud" placeholder="Longitud"  onChange={this.handleChange} value={this.state.form.longitud} required/>
                </div>
                <div className="field">
                    <input type="text" id="nombre" name="nombre" placeholder="Nombre"  onChange={this.handleChange} value={this.state.form.nombre} required/>
                </div>
                <div className="field">
                    <input type="text" id="cargo" name="cargo" placeholder="Cargo"  onChange={this.handleChange} value={this.state.form.cargo} required/>
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