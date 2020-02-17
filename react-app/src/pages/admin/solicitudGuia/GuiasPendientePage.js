import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class GuiasPendientePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isOpenCollapse: false,
        }
    }

    render () {
        return (
            <div>
                <Button color="primary" onClick={ () => this.setState({ isOpenCollapse: !this.state.isOpenCollapse }) } style={{ marginBottom: '1rem' }}>Toggle</Button>
                <Collapse isOpen={this.state.isOpenCollapse}>
                    <Card>
                        <CardBody>
                            Anim pariatur cliche reprehenderit,
                             enim eiusmod high life accusamus terry richardson ad squid. Nihil
                             anim keffiyeh helvetica, craft beer labore wes anderson cred
                             nesciunt sapiente ea proident.
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default GuiasPendientePage;