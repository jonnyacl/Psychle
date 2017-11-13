import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return(
            <div className='NavBar'>
                <button>
                    Home
                </button>
                <button>
                    Profile
                </button>
            </div>
        );
    }

}

export default NavBar;