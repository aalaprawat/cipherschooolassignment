import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
    console.log(props);
    return(
        <nav>
            <div className="nav-wrapper #00695c teal darken-3">
                <a href='/' className='brand-logo center'>Brand Name</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li><Link to='/team'>Our Team</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;