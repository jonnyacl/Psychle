import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/authenticate';

class Header extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout (e) {
        e.preventDefault()
        this.props.logout()
    }
    
    render() {

        const { isAuthenticated, user } = this.props.auth;

        const nonLoggedIn = (
            <ul className = 'navigation'>
                <li><Link to='/login'>Log In</Link></li>
                <li><Link to='/register'>Sign Up</Link></li>
            </ul>
        )

        const loggedIn = (
            <ul className = 'navigation'>
                <li>Welcome, {user.firstName}</li>
                <li><a href='#' onClick={this.logout}>Logout</a></li>
            </ul>
        )

        return(
            <header className='container'>
                <div className='logo'>Psychle</div>
                {isAuthenticated ? loggedIn : nonLoggedIn}
            </header>
        )
    }
}

const { object, func } = PropTypes;

Header.propTypes = {
    auth: object.isRequired,
    logout: func.isRequired
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout })(Header);