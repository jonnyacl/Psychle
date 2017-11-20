import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BikeBuilder extends Component {
    
    render() {

        const { isAuthenticated } = this.props.auth;

        return (
            <div>{isAuthenticated ? 'Bike Builder' : 'Please login to build your bike!'}</div>
        )
    }
}

const { object, func } = PropTypes;

BikeBuilder.propTypes = {
    auth: object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {})(BikeBuilder);