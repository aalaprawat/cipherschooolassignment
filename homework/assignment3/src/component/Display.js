import React, { Component } from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import IconButton from '@material-ui/core/IconButton';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
export default class Display extends Component {
    
constructor(props){
    super(props)
    
}

edit=(entry)=>{
    var pos;
    this.props.data.forEach((element,index) => {
        if(element==entry){
            pos=index;
        }
    });
    var person = prompt("Please enter your updated Chore", "Enter Here");
    this.props.data[pos]=person;
    console.log(this.props.data)
    this.props.edititem(this.props.data)
    

}


delete=(entry)=>{
    let newarray=this.props.data.filter((item)=>{
        return item!=entry;
    })
    this.props.deleteitem(newarray)
}

render(){
    return (<>
  
      {this.props.data.map((entry) => { 
          return <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography >{entry}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <IconButton aria-label="add" onClick={()=>{return this.delete(entry)}}>
                <DeleteOutlinedIcon size='large' color ='secondary'/>
            </IconButton>
            <IconButton aria-label="add" onClick={()=>{return this.edit(entry)}}>
                <EditOutlinedIcon size='large' color ='secondary'/>
            </IconButton>
            
          </AccordionDetails>
        </Accordion>
      })}
   
  </>)}
}
