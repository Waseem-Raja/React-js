//to use state in functional component 
//we have to use Hooks
import { useState } from "react";

function Stateinfunctioncompexample(){

   const [counterValue,setCounter]=useState(0);

   const increment =()=>{

          setCounter(counterValue+1);


   }
   const decrement =()=>{

    setCounter(counterValue-1);


    }
    return <div>

            <h1>State in functional component using hooks</h1>
           <h1>counter value :{counterValue}</h1>
           <button onClick={increment}>increment</button>
           <button onClick={decrement}>decrement</button>
    
    </div>
        

    
}

export default Stateinfunctioncompexample;