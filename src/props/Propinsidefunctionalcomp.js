 function Properties(props)//props is an object which will
 //the key value pairs passed to this function from app.js
 //that means we can pass as many arguments(key value pair) as we want 
 //we can call this functions as many times as we want 
 //and also we can pass children as well 
 {

    return <h1>hello {props.name}{props.children}</h1>
 }

 export default Properties;