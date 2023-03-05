import React from 'react'
import './Button.css'

export const Button = (props) => {

    const cal=(ele)=>{
        props.setbtnvalue(props.btnvalue+ele)

    }

    const results=()=>{
        props.setDisplayinput(eval(props.btnvalue))
        console.log(props.displayinput)
      }

      const clearresult =()=>{
        props.setbtnvalue("")
        props.setDisplayinput("")
      }

      
    
    
  return (
    <div className="buttoncontainer">
    <div className='uppercontainer'> 
    <button className='btn clear' onClick={(e)=>{
        clearresult()
       
    }}>AC</button>
    <button className='btn symbol' value="/" onClick={(e)=>{
        cal(e.target.value)
       
    }}>/</button>
    <button className='btn symbol' value="*" onClick={(e)=>{
        cal(e.target.value)
       
    }}>X</button>
    <button className='btn' value="7" onClick={(e)=>{
        cal(e.target.value)
       
    }}>7</button>
    <button className='btn' value="8" onClick={(e)=>{
        cal(e.target.value)
       
    }}>8</button>
    <button className='btn'value="9" onClick={(e)=>{
        cal(e.target.value)
       
    }}>9</button>
    <button className='btn symbol' value="-" onClick={(e)=>{
        cal(e.target.value)
       
    }}>-</button>
    <button className='btn 'value="4" onClick={(e)=>{
        cal(e.target.value)
       
    }}>4</button>
    <button className='btn'value="5" onClick={(e)=>{
        cal(e.target.value)
       
    }}>5</button>
    <button className='btn' value="6" onClick={(e)=>{
        cal(e.target.value)
       
    }}>6</button>
    <button className='btn symbol' value="+"
    onClick={(e)=>{
        cal(e.target.value)
       
    }}>+</button>



    </div>

    <div className='lowercontainer'>
     <div className='lowerleft'>
     <button className='btn lower' value="1" onClick={(e)=>{
        cal(e.target.value)
       
    }}>1</button>
     <button className='btn lower'value="2" onClick={(e)=>{
        cal(e.target.value)
       
    }}>2</button>
     <button className='btn lower' value="3" onClick={(e)=>{
        cal(e.target.value)
       
    }}>3</button>
     <button className='btn zero'value="0"
     onClick={(e)=>{
        cal(e.target.value)
       
    }}>0</button>
     <button className='btn lower' value="." onClick={(e)=>{
        cal(e.target.value)
       
    }}>.</button>



     </div>

     <div className='lowerright'>
     <button className='btn equals' onClick={()=>{
        console.log("hello")
       results()
    }}>=</button>


     </div>

    

  </div>

</div>

  )
}
