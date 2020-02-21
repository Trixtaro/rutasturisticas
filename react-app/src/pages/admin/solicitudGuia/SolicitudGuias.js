import React from 'react';
import foto from '../../../images/montecristi.jpg';
import { Button } from 'reactstrap';

class SolicitudGuias extends React.Component {
    guia = {
        nombres : 'Cinthya Briones',
        foto : foto,
        descripcion : ''
    };

    render () {
        return (
            <div className="container-fuild mt-3">
                <div className="row">
                    <div className="col-12 col-sm-7">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={ this.guia.foto } className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{this.guia.nombres}</h5>
                                    <p className="card-text">{this.guia.descripcion}</p>
                                    <p className="card-text"><small className="text-muted">Fecha de envio: </small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-5">
                        <div className='row' >
                            <div className='col-12'>
                                <Button outline color="primary">Ver certificado de turismo</Button>
                                <Button outline color="primary">Ver documento de identidad</Button>
                            </div>
                            <div className='col mt-3'>
                                <Button color="success">Aceptar</Button>
                                <Button className='ml-3' color="danger">Denegar</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SolicitudGuias;