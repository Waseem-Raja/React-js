//Class Component
/*
class component is nothing but a regular es6 class that
extend from react component class
class component must contain a render method which
returns HTML(jsx)
*/


import {Component} from "react"

class Message extends Component{
    render(){

        return <h1>Learning class component</h1>
    }
    
}

//exporting it
export default Message;