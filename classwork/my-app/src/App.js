import React from 'react';
import Display from './components/Display';
import Navbar from './components/Navbar';
import AddCourse from './components/AddCourse';
import './App.css';

class App extends React.Component {
  state = { 
    heading: 'React App',
    courseDetails: [
      { id: 1, title: 'React', details: 'Best UI Library ', instructor: 'Jack' },
      { id: 2, title: 'Node', details: 'I/O, event driven environment', instructor: 'Jack' },
    ]
   }

   addCourse = (course) => {
     console.log('Inside App.js', course);
     course.id = Math.ceil(Math.random() * 100);  
     let courseDetails = [...this.state.courseDetails, course];
     console.log('New Course Details Array', courseDetails);
     // re render happens
     this.setState({
      //  courseDetails: newCourseDetails
        courseDetails
     })
   }

   deleteCourse = (courseid) => {

   }


  render(){
    return (
      <div className="App">
        <Navbar heading={this.state.heading}></Navbar>
        <Display deleteCourse={this.deleteCourse} courseDetails={this.state.courseDetails}></Display>
        <AddCourse addCourse ={this.addCourse}></AddCourse>
      </div>
    );
  }  
}

export default App;
