import React from 'react';
import foto from '../../../images/montecristi.jpg';
import { Button,
    Breadcrumb, BreadcrumbItem,
    FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class SolicitudGuias extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            toHome: false,
            guia: null,
            cargaTexto: '',
            carga: false,
            zonas:[],
            form: {
                estado: '',
                ID_guia: this.props.match.params.id,
                feedback: '',
            },
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

    async componentDidMount () {
        try {
            this.setState({
                cargaTexto: 'Buscando...',
                carga: false
            });
            const response = await fetch( 
                `${process.env.REACT_APP_LARAVEL}/api/guia/filtro/E/${this.props.match.params.id}`, 
                { 
                    method: 'GET'
                } 
            );
            console.log('El fetch en SolicitudGuias@componentDidMount dio ', response);
            const respuesta = await response.json();
            console.log('La respuesta en SolicitudGuias@componentDidMount dio ', respuesta);
            if (response.ok) {
                if (respuesta.success) {
                    this.setState({
                        guia: respuesta.data.guia,
                        cargaTexto: '',
                        carga: true
                    });
                } else {
                    this.setState({
                        guia: null,
                        cargaTexto: 'No existen registro',
                        carga: false
                    });
                }
            } else {
                this.setState({
                    guia: null,
                    cargaTexto: 'Error en la busqueda',
                    carga: false
                });
            }
        } catch (error) {
            console.log("<Error en clase 'SolicitudGuias@componentDidMount'>");
            console.log(error);
            console.log("<Error en clase 'SolicitudGuias@componentDidMount'/>");
        }
        try {
            const responseZona = await fetch( 
                `${process.env.REACT_APP_LARAVEL}/api/zona`, 
                { 
                    method: 'GET'
                } 
            );
            const respuestaZona = await responseZona.json();
            if (responseZona.ok) {
                this.setState({
                    zonas : respuestaZona.data,
                });
            } else {
                this.setState({
                    zonas : [],
                });
                console.log("Error " + responseZona.statusText + " estado es " + responseZona.status);
            }
        } catch (error) {
            console.log("<Error en clase 'SolicitudGuias@componentDidMount'>");
            console.log(error);
            console.log("<Error en clase 'SolicitudGuias@componentDidMount'/>");
        }
    }

    agregarEstado (opcion) {
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                estado: opcion,
            }
        })
        this.envioSolicitudGuia();
    }

    async envioSolicitudGuia () {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_LARAVEL}/api/guia/cambiarEstado`, 
                    { 
                        method: 'POST',
                        body: JSON.stringify(this.state.form)
                    }
            );
            console.log("El fetch SolicitudGuias@envioSolicitudGuia respondio con ", response);
            const respuesta = await response.json();
            console.log("El formulario SolicitudGuias@envioSolicitudGuia respondio con ", respuesta);
            if (response.ok) {
                if (respuesta.success) {
                    alert('Solicitud enviada');
                    this.setState({
                        toHome:true,
                    });
                } else {
                    alert('Algo malo paso');
                }
            } else {
                console.log("Error SolicitudGuias@envioSolicitudGuia " + response.statusText + " estado es " + response.status);
            }
        } catch (error) {
            console.log("<Error handleLoguear componente 'SolicitudGuias@envioSolicitudGuia'>");
            console.log(error);
            console.log("<Error handleLoguear componente 'SolicitudGuias@envioSolicitudGuia'/>");
        }
    }

    render () {
        return (
            <>
            {this.state.toHome ? <Redirect to="/admin/" /> : null}
            <div className="container-fuild mt-3">
                <h1>Guía Pendiente</h1>
                <div>
                    <Breadcrumb tag="nav" listTag="div">
                        <BreadcrumbItem tag="a" href="/admin">Home</BreadcrumbItem>
                        <BreadcrumbItem tag="a" href="/admin/solicitudes">Solicitudes</BreadcrumbItem>
                        <BreadcrumbItem active tag="span">Guía</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-7">
                        <div className="row no-gutters">
                            { this.state.guia ? (
                            <>
                            <div className="col-md-4 pt-4">
                                <img src={foto} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                        <h5 className='card-title'> {this.state.guia.persona.nombres} {this.state.guia.persona.apellido_paterno} {this.state.guia.persona.apellido_materno} ({this.state.guia.persona.cedula})</h5>
                                        <p className="card-text">Motivo para ser guía: {this.state.guia.motivo}</p>
                                        <p className="card-text">Descripción del guía: {this.state.guia.descripcion}</p>
                                        <p className="card-text">Correo: {this.state.guia.usuario.correo}</p>
                                        <p className="card-text">Título: {this.state.guia.titulo}</p>
                                        { this.state.zonas.map( (e, i) =>  { 
                                            if (e.Id === this.state.guia.ID_zona) {
                                                return <p className="card-text">Zona: {e.Lugar} Nivel Supeior: { e.nivel_superior }</p>;
                                            }
                                        })}
                                        <p className="card-text"><small className="text-muted">Fecha de envio: {this.state.guia.f_ingreso}</small></p>
                                </div>
                            </div>
                            </>
                            ) : this.state.cargaTexto }
                        </div>
                    </div>
                    <div className="col-12 col-sm-5">
                        <div className='row' >
                            <div className='col-12'>
                                <Button outline block disabled={!this.state.carga} color="primary">Ver certificado de turismo</Button>
                            </div>
                            <div className='col-12 mt-3'>
                                <Button outline block disabled={!this.state.carga} color="primary">Ver documento de identidad</Button>
                            </div>
                            <div className='col mt-3'>
                                <FormGroup>
                                    <Label for="feedbackText">Retro alimentación</Label>
                                    <Input type="textarea" name="feedback" id="feedbackText" onChange={this.handleChange} />
                                    <FormText>Motivo de la aceptación o rechazo de la solicitud.</FormText>
                                </FormGroup>
                                <Button onClick={() => this.agregarEstado('H')} outline color="success" disabled={!this.state.carga}>Aceptar</Button>
                                <Button onClick={() => this.agregarEstado('R')} outline className='ml-3' color="danger" disabled={!this.state.carga}>Denegar</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default SolicitudGuias;