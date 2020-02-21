import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

class SolicitudGuia extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            zonas:[],
            form: {
                certificado: '',
                identificacion: '',
                ID_usuario: this.props.match.params.id,
                descripcion: '',
                motivo: '',
                titulo: '',
                ID_zona: '',
            },
            toHome:false,
            cargando:false,
            cargandoTexto:'Agregar Lugar',
        }
    }

    handleChangeFile = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.files[0]
            }
        })
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            cargando:true,
            cargandoTexto:' agregando...'
        });
        try {
            let rutaServer = `${process.env.REACT_APP_LARAVEL}/api/guia`;
            const response = await fetch(
                rutaServer,
                    { 
                        method: 'POST',
                        body: JSON.stringify(this.state.form)
                    }
            );
            const respuesta = await response.json();
            if (response.ok) {
                if ( respuesta.success ) {
                    this.setState({
                        cargando:false,
                        toHome:true,
                        cargandoTexto:'Agregar Lugar',
                    });
                } else {

                }
            } else {
                console.log("Error componente 'SolicitudGuia@handleSubmit' " + response.statusText + " estado es " + response.status);
            }
        } catch (error) {
            alert("Error");
            console.log("<Error en componente 'SolicitudGuia@handleSubmit'>");
            console.log(error);
            console.log("<Error en componente 'SolicitudGuia@handleSubmit'/>");
        }
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

    render () {
        return (
            <>
            { this.state.toHome ? <Redirect to="/admin/lugar" /> : null }
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
                        <Label for="tituloText">Título</Label>
                        <Input type="text" name="titulo" id="tituloText" onChange={this.handleChange} />
                        <FormText>Así nos ayuda a saber donde eres experto.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="descripcionText">Descripción</Label>
                        <Input type="textarea" name="descripcion" id="descripcionText" onChange={this.handleChange} />
                        <FormText>Aquí nos cuenta como te describes siendo un guía.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="motivoText">Motivo</Label>
                        <Input type="textarea" name="motivo" id="motivoText" onChange={this.handleChange} />
                        <FormText>Aquí nos cuenta por que te aceptariamos como un guía.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="idZonaText">Zonas</Label>
                        <Input type="select" name="ID_zona" id="idZonaText" onChange={this.handleChange}>
                            <option value="">Seleccione una zona...</option>
                            { this.state.zonas.map( (e, i)=><option key={i} value={e.Id} >{ e.Lugar } { e.nivel_superior ? e.nivel_superior : '' }</option> )  }
                        </Input>
                        <FormText>Aquí puedes poder la zona de donde eres guía.</FormText>
                    </FormGroup>
                     <FormGroup>
                        <Label for="identidadFile">Documento de identidad</Label>
                        <Input type="file" name="identificacion" id="identidadFile" onChange={this.handleChangeFile} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="certificadoFile">Certificado de turismo</Label>
                        <Input type="file" name="certificado" id="certificadoFile" onChange={this.handleChangeFile} />
                    </FormGroup>
                    <Button>Enviar</Button>
                </Form>
            </div>
            </>
        );
    }
}

export default SolicitudGuia;