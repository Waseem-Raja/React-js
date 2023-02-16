import { Component } from "react";

class Formsubmit extends Component{
    state={
        firstName:"",
        lastName:"",
    }
    handlefirstname=(event)=>{
        this.setState({
            firstName:event.target.value
        })
    }
    handlelastname=(event)=>{
        this.setState({
            lastName:event.target.value
        })
    }
    submitform=(event)=>{
        //prevent default refresh
        event.preventDefault();
        console.log(this.state.firstName);
        console.log(this.state.lastName)



    }
    render(){

        return(
            <form onSubmit={this.submitform}>
            <input type="text" value={this.state.firstName} onChange={this.handlefirstname}></input>
            <input type="text" value={this.state.lastName} onChange={this.handlelastname}></input>
            <button>submit</button>
            </form>
        )
    }
}

export default Formsubmit;