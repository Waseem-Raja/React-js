//functional component
/*
functional component is a javascript function that accepts
input called props(properties) and return HTML(jsx) which
describes the UI
*/
//using arrow function
const Hello=()=> <h1>Hello World</h1>;

//using normal funciton
/*function Hello(){
    return <h1>hello world</h1>
}*/

//exporting the Hello component
export default Hello;

//default indicates you can import
//  and rename Hello component  anywhere now

//jsx is a syntex extension to js and it comes
// with  full power of js
//we can combine js logic with these html tags using jsx
//example
const name="waseem";
function Name(){
    // return <h1>Hello, {name}</h1>
    //return <h1>hello {hay()} </h1>
}

function hay(){
    return "waseem"
}