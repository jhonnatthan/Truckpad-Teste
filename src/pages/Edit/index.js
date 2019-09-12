import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container } from './styles';

class Edit extends Component {
    render = () => {
        return (
            <Container>
                <h1>Home</h1>

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
)(Edit);
