import React from 'react';
import SuperCharger from '../HOC/SuperCharger'
const About = () => {
    return(
        <div className='center container'>
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum error eius animi eligendi labore officia veniam, numquam voluptatum cumque sed amet modi quos possimus optio iure ad ullam minus?</p>
        </div>
    )
}

export default SuperCharger( About);