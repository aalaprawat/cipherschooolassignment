import React from 'react';
import SuperCharger from '../HOC/SuperCharger';

const Contact = (props) => {
    // props.history.goBack();
    return(
        <div className='center container'>
            <h3>Contact Us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum error eius animi eligendi labore officia veniam, numquam voluptatum cumque sed amet modi quos possimus optio iure ad ullam minus?</p>
        </div>
    )
}

export default SuperCharger(Contact);