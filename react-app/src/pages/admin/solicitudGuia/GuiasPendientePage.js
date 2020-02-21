import React from 'react';
import { UncontrolledCollapse, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter,
    Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class GuiasPendientePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isOpenCollapse: false,
            guiasEstado: null,
            guiasTexto: '',
            guias: [],
        }
    }

    async componentDidMount () {
        try {
            this.setState({
                guiasTexto: 'Buscando...',
            });
            const response = await fetch( 
                `${process.env.REACT_APP_LARAVEL}/api/guia/filtro/estado/E`, 
                { 
                    method: 'GET'
                } 
            );
            console.log('El fetch de GuiasPendientePage@componentDidMount dio ', response);
            const respuesta = await response.json();
            console.log('La respuesta GuiasPendientePage@componentDidMount dio ', respuesta);
            if (response.ok) {
                if (respuesta.success) {
                    if ( respuesta.data.guia.length > 0 ) {
                        this.setState({
                            guias: respuesta.data.guia,
                            guiasEstado: true,
                            guiasTexto: '',
                        });
                    } else {
                        this.setState({
                            guias: respuesta.data.guia,
                            guiasEstado: false,
                            guiasTexto: 'No hemos encontrodo solicitudes de guías',
                        });
                    }
                } else {
                    this.setState({
                        guias: [],
                        guiasEstado: false,
                        guiasTexto: 'No hemos encontrodo solicitudes de guías',
                    });
                }
            } else {
                this.setState({
                    guiasEstado: false,
                    guiasTexto: 'Ha ocurrido algo con la busqueda',
                    guias: [],
                });
            }
        } catch (error) {
            this.setState({
                guiasEstado: false,
                guiasTexto: 'Error fatal',
                guias: [],
            });
            console.log("<Error en clase 'GuiasPendientePage@componentDidMount'>");
            console.log(error);
            console.log("<Error en clase 'GuiasPendientePage@componentDidMount'/>");
        }
    }

    listar () {
        if (this.state.guias.length > 0) {
            return this.state.guias.map( (e, i) =>
                <Card key={i}>
                    <CardHeader>
                        <a href='!#' id={ 'toggler-' + e.ID_usuario } >Guía ({e.persona.cedula})</a>
                    </CardHeader>
                <UncontrolledCollapse toggler={ '#toggler-' + e.ID_usuario }>
                    <CardBody>
                        <CardTitle>{ e.persona.nombres + ' ' + e.persona.apellido_paterno + ' ' + e.persona.apellido_materno }</CardTitle>
                        <CardText>{e.usuario.correo}</CardText>
                        <CardText><small className="text-muted">Fecha de envio: {e.f_ingreso}</small></CardText>
                    </CardBody>
                    <CardFooter><Link to={`/admin/solicitudes/ver/${e.ID_usuario}`} >Más Información</Link></CardFooter>
                </UncontrolledCollapse >
                </Card>
            );
        }
    }

    render () {
        return (
            <div className='container-fluid mt-3'>
                <h1>Solicitudes Pendientes</h1>
                <div>
                    <Breadcrumb tag="nav" listTag="div">
                        <BreadcrumbItem tag="a" href="/admin">Home</BreadcrumbItem>
                        <BreadcrumbItem active tag="span">Solicitudes</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="accordion">
                    { this.state.guiasEstado ? (this.listar()) : this.state.guiasTexto }
                </div>
            </div>
        );
    }
}

export default GuiasPendientePage;