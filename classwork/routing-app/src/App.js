import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import SuperCharger from './HOC/SuperCharger'

class App extends Component {
  render(){
    return (
        <div className="App">
          <Navbar></Navbar>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/404' render= {() => { return (<p className='center'>Page Not Found</p>)}} />
        </div>
    );
  }
}

export default SuperCharger(App);
