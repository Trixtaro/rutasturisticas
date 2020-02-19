import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { getAdminAttribute } from '../functions/Functions';

class AdminHomePage extends React.Component {
    state = {
        data: null
    }

    async componentDidMount () {
        var data = await getAdminAttribute();
        this.setState({
            data: data
        });
    }

    render () {
        return (
            
            <Jumbotron fluid>
                <Container fluid>
                  <h1 className="display-3">Hola { this.state.data ? this.state.data.persona.nombres : '' } </h1>
                  <p className="lead">Este es el espacio para poder controlar todo el sistema 😎.</p>
                </Container>
            </Jumbotron>
        );
    }
}

export default AdminHomePage;