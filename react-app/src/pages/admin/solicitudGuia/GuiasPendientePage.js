import React from 'react';
import { UncontrolledCollapse, Button, Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';
import {Link} from 'react-router-dom';

class GuiasPendientePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isOpenCollapse: false,
            guias: [],
        }
    }

    componentDidMount () {
        var resultado = [{
            codigo: '#1',
            nombre: 'Cinthya',
            fechaEnvio: 'hoy',
            id: '1'
        }, {
            codigo: '#2',
            nombre: 'Luis',
            fechaEnvio: 'ayer',
            id: '2'
        }];

        this.setState({
            guias: resultado
        });
    }

    listar () {
        if (this.state.guias.length > 0) {
            return this.state.guias.map( (e, i) =>
                <Card key={i}>
                    <CardHeader>
                        <a id={ 'toggler-' + e.id } >Guía {e.codigo}</a>
                    </CardHeader>
                <UncontrolledCollapse toggler={ '#toggler-' + e.id }>
                    <CardBody>
                        <CardTitle>{e.nombre}</CardTitle>
                        <Link to={`/admin/solicitudes/ver/${e.id}`} >Más Información</Link>
                        <CardText><small className="text-muted">Fecha de envio: {e.fechaEnvio}</small></CardText>
                    </CardBody>
                </UncontrolledCollapse >
                </Card>
            );
        }
    }

    render () {
        return (
            <div className='container-fluid mt-3'>
                <h1>Solicitudes Pendientes</h1>
                <div className="accordion">
                    { this.listar() }
                </div>
            </div>
        );
    }
}

export default GuiasPendientePage;