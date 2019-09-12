import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '~/components/Header';
import TruckerList from '~/components/TruckerList'
import { Container } from 'react-bootstrap';

import storage from '~/services/storage';
import data from '~/data.json';
import TruckerActions from '~/store/ducks/trucker';

class Home extends Component {

    componentDidMount = () => {
        const { loadTruckers } = this.props
        let truckers = storage.getTruckers();

        let truckersData = !truckers ? data : truckers;

        storage.setTruckers(truckersData);
        loadTruckers(truckersData)
    }

    render = () => {
        return (
            <Container className="my-4 p-2">
                <Header />
                <TruckerList />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    truckers: state.trucker.truckers
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ ...TruckerActions }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
