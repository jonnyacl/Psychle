import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/authenticate';
import header from '../styles/header.css'

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
            <div>
                <Link to='/' className='logo'>Psychle</Link>
                <div className = 'navigation'>
                    <div className='login'><Link to='/login' >Log In</Link></div>
                    <div className='register'><Link to='/register' >Sign Up</Link></div>
                </div>
            </div>
        )

        const loggedIn = (
            <div className='navigation'>
                <Link to='/' className='logo'>Psychle</Link>
                <div>
                    <Link to='/profile'>{user.firstname}</Link>
                </div>
                <div>
                    <a href='#' onClick={this.logout}>Logout</a>
                </div>
            </div>
        )

        return(
            <header className='container'>
                
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