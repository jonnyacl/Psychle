import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Navigate extends Component {
    render() {
        return (
            <nav>
                <ul className='subnav'>
                    <li className={this.props.location.pathname === '/' ? 'active' : ''}><Link to='/'>Dashboard</Link></li>
                    <li className={this.props.location.pathname === '/profile' ? 'active' : ''}><Link to='/profile'>Profile</Link></li>
                    <li className={this.props.location.pathname === '/bikebuilder' ? 'active' : ''}><Link to='/bikebuilder'>Bike Builder</Link></li>
                </ul>
            </nav>
        )
    }
}
const { object } = PropTypes;

Navigate.propTypes = {
    location: object
}