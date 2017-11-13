import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    
    render() {

        const { isAuthenticated, user } = this.props.auth;

        const nonLoggedIn = (
            <ul className = 'naviation'>
                <li><Link to='/login'>Log In</Link></li>
                <li><Link to='/register'>Sign Up</Link></li>
            </ul>
        )

        return(
            <header className='container'>
                <div className='logo'>Psychle</div>
                {isAuthenticated ? '' : nonLoggedIn}
            </header>
        )
    }
}

const { object, func } = PropTypes;

Header.propTypes = {
    auth: object.isRequired
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header);