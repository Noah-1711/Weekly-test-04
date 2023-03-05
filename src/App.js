import { useState } from 'react';
import './App.css';
import { Button } from './Components/Button';
import { Display } from './Components/Display';

function App() {

  const [btnvalue, setbtnvalue] = useState("")
  const [displayinput , setDisplayinput] = useState("")
  console.log(displayinput)
   
  

  
  return (
    <div className="App">
      <div className="maincontainer">
        < Display btnvalue={btnvalue} setbtnvalue={setbtnvalue}  displayinput={displayinput} setDisplayinput={setDisplayinput}/>
       <Button  btnvalue={btnvalue} setbtnvalue={setbtnvalue}  displayinput={displayinput} setDisplayinput={setDisplayinput}/>
      </div>
   
    </div>
  );
}

export default App;
