import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Row, Col, ListGroup, ButtonGroup, Button } from 'react-bootstrap';
import { TruckerName } from './styles';

class TruckerList extends Component {

    handleView = index => {
        const { history: { push } } = this.props;
        push(`/trucker/${index}/view`)
    }

    handleEdit = index => {
        const { history: { push } } = this.props;
        push(`/trucker/${index}/edit`)
    }

    handleRemove = index => {
        const { history: { push } } = this.props;
        push(`/trucker/${index}/remove`)
    }

    renderItem = (trucker, index) => {
        const realIndex = index + 1;
        return (
            <ListGroup.Item key={realIndex} className="d-flex justify-content-between align-items-center flex-wrap">
                <TruckerName>{trucker.name}</TruckerName>
                <ButtonGroup size="sm">
                    <Button variant="info" onClick={() => this.handleView(realIndex)}>Visualizar <i className="fa fa-eye"></i></Button>
                    <Button variant="primary" onClick={() => this.handleEdit(realIndex)}>Editar <i className="fa fa-pencil"></i></Button>
                    <Button variant="danger" onClick={() => this.handleRemove(realIndex)}>Remover <i className="fa fa-trash"></i></Button>
                </ButtonGroup>
            </ListGroup.Item>
        )
    };

    render = () => {
        const { truckers } = this.props;

        return (
            <Row className="mt-4">
                <Col xs={12}>
                    {truckers.length ? (
                        <ListGroup>
                            {truckers.map(this.renderItem)}
                        </ListGroup>
                    ) : <h1>Nenhum caminhoneiro cadastrado</h1>}

                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    truckers: state.trucker.truckers
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(TruckerList));
