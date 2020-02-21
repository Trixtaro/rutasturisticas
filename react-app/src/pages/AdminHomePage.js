import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

class AdminHomePage extends React.Component {
    render () {
        return (
            <Jumbotron fluid>
                <Container fluid>
                  <h1 className="display-3">Hola</h1>
                  <p className="lead">Este es el espacio para poder controlar todo el sistema <span aria-label='emoji con gafas' role="img">😎</span>.</p>
                </Container>
            </Jumbotron>
        );
    }
}

export default AdminHomePage;