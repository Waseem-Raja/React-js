import logo from './logo.svg';
import './App.css';
//importing Hello, Message component's from components folder
import Hello  from './components/functionalcomponent/Hello';
import Message from './components/classcomponent/Message';
function App() {
  return (
    <div className="App">

   
       <Message/>

        <Hello/>



      
    </div>
  );
}

export default App;
