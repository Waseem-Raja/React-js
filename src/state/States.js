import { Component } from "react";
class Stateexample extends Component{
    constructor(){
        super();
        this.state={
           counter:0,

        }
    }
    incrementCounter(){
        
        this.setState({
         counter:this.state.counter+1
        })
    }
    decrementCounter(){
        
        this.setState({
         counter:this.state.counter-1
        })
    }
    render(){
    //   we can return only single tag
        return <div>
              
        <h1>Counter value : {this.state.counter} </h1>
        <button onClick={()=>this.incrementCounter()}>incrementCounter</button>
        <button onClick={()=>this.decrementCounter()}>decrementCounter</button>
        </div>
    }
    
}

//exporting it
export default Stateexample;