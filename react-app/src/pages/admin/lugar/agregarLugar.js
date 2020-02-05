import React from 'react';
import { Redirect } from 'react-router-dom';

class agregarLugar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            toHome:false,
            form: {
                nickname: '',
                password: ''
            },
        }
    }

    formulario () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field">
                    <input type="text" id="usuario" name="nickname" placeholder="Usuario" onChange={this.handleChange} value={this.state.form.nickname} required/>
                </div>
                <div className="field">
                    <input type="password" id="clave" name="password" placeholder="Contraseña"  onChange={this.handleChange} value={this.state.form.clave} required/>
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