import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container } from 'react-bootstrap';

class Create extends Component {
    render = () => {
        return (
            <Container className="container">
                <h1>ADD</h1>

            </Container>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Create);
