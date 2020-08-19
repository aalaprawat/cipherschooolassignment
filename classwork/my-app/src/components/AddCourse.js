import React, { Component } from 'react';
import './addCourse.css';


class AddCourse extends Component{
    state = {
        title: '',
        details: '',
        instructor: ''
    }
    
    handleDelete = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    
    // object['property']
    handleChange = (event) => {
        // console.log([event.target.id]);
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    handleSubmit = (event) => {        
        event.preventDefault();
        console.log('Inside AddCourse.js', this.state);
        this.props.addCourse(this.state);   
        this.setState({
            title: '',
            details: '',
            instructor: ''
        })    
    }
    
    render(){
        return(
            <form className='add-form' onSubmit={this.handleSubmit}>
                <label htmlFor='title'>Course Name</label>
                <input type='text' id='title' placeholder='enter course name .....' onChange={this.handleChange} value={this.state.title}></input> <br></br>

                <label htmlFor='details'>Details</label>
                <input type='text' id='details' placeholder='enter course details name .....' onChange={this.handleChange} value={this.state.details}></input> <br></br>

                <label htmlFor='instructor'>Instructor Name</label>
                <input type='text' id='instructor' placeholder='enter instructor name .....' onChange={this.handleChange} value={this.state.instructor}></input> <br></br>

                <input type='submit' value='Add Course'></input>
            </form>           
        )
    }
}

export default AddCourse;