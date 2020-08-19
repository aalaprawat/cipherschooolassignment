import React from 'react';
import './navbar.css';

const Navbar = (props) => {
    return(
        <div className='nav'>
            <h2 >{props.heading}</h2>
        </div>
)}

export default Navbar;