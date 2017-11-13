import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import Navigate from './Navigate';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                {(this.props.isAuthenticated ? <Navigate location={this.props.location} /> : '')}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(App);