import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class SolicitudGuia extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            form: {
                certificado: null,
                identificacion: null,
                ID_usuario: this.props.match.params.id,
            }
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.files[0]
            }
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state.form);
        try {
            const formData = new FormData();
            formData.append('file', this.state.form.certificado);
            formData.append('file', this.state.form.identificacion);
            //formData.append('ID_usuario', this.state.form.ID_usuario);
            console.log(formData);
            const response = await fetch( `${process.env.REACT_APP_LARAVEL}/api/guia`, formData );
            console.log("El formulario respondio con ", response);
            const respuesta = await response.json();
            console.log("El formulario respondio con JSON ", respuesta);

            
        } catch (error) {
            alert("Error");
            console.log("<Error en componente 'SolicitudGuia@handleSubmit'>");
            console.log(error);
            console.log("<Error en componente 'SolicitudGuia@handleSubmit'/>");
        }
    }

    render () {
        return (
            <div className='container-fluid mt-3 mb-3'>
                <h1>Solicitud <span className="badge badge-secondary">Guía</span></h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Solicitud</li>
                    </ol>
                </nav>
                <Form onSubmit={this.handleSubmit}>
                     <FormGroup>
                        <Label for="identidadFile">Documento de identidad</Label>
                        <Input type="file" name="identificacion" id="identidadFile" onChange={this.handleChange} />
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="certificadoFile">Certificado de turismo</Label>
                        <Input type="file" name="certificado" id="certificadoFile" onChange={this.handleChange} />
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </FormGroup>
                    <Button>Enviar</Button>
                </Form>
            </div>
        );
    }
}

export default SolicitudGuia;