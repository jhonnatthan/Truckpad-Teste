import React, { Component, Fragment } from 'react';

import { withRouter } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Title } from './styles';

class Header extends Component {

    createTrucker = () => {
        const { history: { push } } = this.props;

        push('/trucker/create');
    }

    render = () => {
        return (
            <Fragment>
                <Row className="justify-content-between align-items-center flex-wrap">
                    <Col xs={12} md={6}>
                        <Title>Truckpad</Title>
                    </Col>

                    <Col xs={12} md={6}>
                        <Form>
                            <Form.Control type="text" placeholder="Buscar por nome" />
                        </Form>
                    </Col>
                </Row>
                <Row className="mt-4 justify-content-end">
                    <Col xs={12} md={5} lg={3}>
                        <Button variant="primary" block onClick={this.createTrucker}>Novo caminhoneiro <i className="fa fa-plus"></i></Button>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default withRouter(Header);
