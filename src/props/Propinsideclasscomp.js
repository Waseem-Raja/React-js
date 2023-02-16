import { Component } from "react";

class Propexam extends Component{
    
    render(){
       //we can destructure props 
        //    const {say}=this.props;
        // now we can use just "say" to access its value
         return <h1>Topic: {this.props.say}</h1>
    }
}

export  default Propexam;