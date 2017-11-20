import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Profile extends Component {

    render() {

        const { isAuthenticated } = this.props.auth;

        return (
            
            <div>{isAuthenticated ? 'Profile page': 'Please login to view your profile'}</div>
        )
    }
 
}

const { object, func } = PropTypes;

Profile.propTypes = {
    auth: object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {})(Profile);