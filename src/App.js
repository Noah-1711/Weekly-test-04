import { useState } from 'react';
import './App.css';
import { Button } from './Components/Button';
import { Display } from './Components/Display';

function App() {

  const [btnvalue, setbtnvalue] = useState("")
  const [display,setDisplay] = useState("")
   const onClick=()=>{
    console.log("hello onclick")

   }
  const results=()=>{
    console.log(display,"results called")
    setDisplay(eval(btnvalue))
  }


  
  return (
    <div className="App">
      <div className="maincontainer">
        < Display btnvalue={btnvalue} setbtnvalue={setbtnvalue}  display={display} setDisplay={display}/>
        <div className="buttoncontainer">
          <div className='uppercontainer'> 
          <Button height=" 71px"  width="50%" text="AC" bgcolor="#ac3939" btnvalue={btnvalue} setbtnvalue={setbtnvalue}  />
          <Button text="/" bgcolor="#666666" btnvalue={btnvalue} setbtnvalue={setbtnvalue}/>
          <Button text="X" bgcolor="#666666" btnvalue={btnvalue} setbtnvalue={setbtnvalue}/>
          <Button text="7"bgcolor="#4d4d4d" btnvalue={btnvalue} setbtnvalue={setbtnvalue}/>
          <Button text="8"bgcolor="#4d4d4d" btnvalue={btnvalue} setbtnvalue={setbtnvalue}/>
          <Button text="9"bgcolor="#4d4d4d" btnvalue={btnvalue} setbtnvalue={setbtnvalue}/>
          <Button text="-" bgcolor="#666666" btnvalue={btnvalue} setbtnvalue={setbtnvalue}/>
          <Button text="4" bgcolor="#4d4d4d" btnvalue={btnvalue} setbtnvalue={setbtnvalue}/>
          <Button text="5" bgcolor="#4d4d4d" btnvalue={btnvalue} setbtnvalue={setbtnvalue}/>
          <Button text="6" bgcolor="#4d4d4d" btnvalue={btnvalue} setbtnvalue={setbtnvalue}/>
          <Button text="+" bgcolor="#666666" btnvalue={btnvalue} setbtnvalue={setbtnvalue}/>
          </div>
          <div className='lowercontainer'>
           <div className='lowerleft'>
           <Button height="71px"  width="33%" text="1" bgcolor="#4d4d4d" btnvalue={btnvalue} setbtnvalue={setbtnvalue}/>
          <Button height="71px"  width="33%" text="2" bgcolor="#4d4d4d" btnvalue={btnvalue} setbtnvalue={setbtnvalue}/>
          <Button  height="71px"  width="34%" text="3" bgcolor="#4d4d4d" btnvalue={btnvalue} setbtnvalue={setbtnvalue}/>
          <Button  height=" 71px"  width="66%" text="0" bgcolor="#4d4d4d" btnvalue={btnvalue} setbtnvalue={setbtnvalue}/>
          <Button height="71px"  width="34%" text="+" bgcolor="#4d4d4d" btnvalue={btnvalue} setbtnvalue={setbtnvalue}/>

           </div>
           <div className='lowerright'>
           <Button height="100%"  width="100%" text="=" bgcolor="#004466" btnvalue={btnvalue} setbtnvalue={setbtnvalue} onclick={onClick}/>


           </div>

          
          </div>
       
      




        </div>

      </div>
   
    </div>
  );
}

export default App;
