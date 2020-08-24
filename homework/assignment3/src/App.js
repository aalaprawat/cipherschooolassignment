import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './component/Navbar'
import Add from './component/Add'
import Display from './component/Display'


class App extends Component {


  constructor(){
    super();
    this.state={
      data:["Housekeeping","Gardening","Movie"]
    }
  }

  edititem=(entry)=>{
    this.setState({data:entry})
  }
  deleteitem=(entry)=>{
   this.setState({data:entry})
  }
  additem=(entry)=>{
      let newarray=[...this.state.data]
      newarray.push(entry)
     this.setState({data:newarray})
  }
 render(){
  return (
    <div className="App">
      <Navbar/>
      <Add additem={this.additem}/>
      <Display data={this.state.data} deleteitem={this.deleteitem} edititem={this.edititem}/>
    </div>
  )}
}

export default App;
