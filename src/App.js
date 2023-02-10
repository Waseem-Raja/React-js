// import logo from './logo.svg';
import './App.css';
//importing Hello, Message component's from components folder
import Hello  from './components/functionalcomponent/Hello';
import Properties from './props/Propinsidefunctionalcomp';
import Message from './components/classcomponent/Message';
import Propexam  from './props/Propinsideclasscomp';
function App() {
  return (
    <div className="App">

       <Hello/>
       <Message/>
       <Properties name="props in functional component">
       <h1>i am a children and i can be passed to a component</h1>
       </Properties>
 
       <Propexam say="props in class component"/>

        

        



      
    </div>
  );
}

export default App;
