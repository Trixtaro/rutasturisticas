import React from 'react';
import { Redirect } from 'react-router-dom';

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
            <form onSubmit={this.handleSubmit}>
                <div className="field">
                    <input type="text" id="nombre" name="nombre" placeholder="Nombre" onChange={this.handleChange} value={this.state.form.nombre} required/>
                </div>
                <div className="field">
                    <input type="text" id="descripcion" name="descripcion" placeholder="Descripción" onChange={this.handleChange} value={this.state.form.descripcion} required/>
                </div>
                <div className="field">
                    <input type="text" id="altura_sobre_nivel_del_mar" name="altura_sobre_nivel_del_mar" placeholder="Altura sobre el nivel del mar" onChange={this.handleChange} value={this.state.form.altura_sobre_nivel_del_mar} required/>
                </div>
                <div className="field">
                    <input type="text" id="latitud" name="latitud" placeholder="Latitud" onChange={this.handleChange} value={this.state.form.latitud} required/>
                </div>
                <div className="field">
                    <input type="text" id="longitud" name="longitud" placeholder="Longitud"  onChange={this.handleChange} value={this.state.form.longitud} required/>
                </div>
                <div className="field">
                    <input type="text" id="imagen" name="imagen" placeholder="Imagen"  onChange={this.handleChange} value={this.state.form.imagen} required/>
                </div>
                <div className="field">
                    <select id="ID_zona" name="ID_zona" onChange={this.handleChange} value={this.state.form.ID_zona} required>
                        <option value="">Seleccione una zona...</option> 
                        { this.comboZonas() }
                    </select>    
                </div>
                <button className="boton">Agregar Lugares</button>
            </form>
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