import React from 'react'
import './Display.css'

export const Display = (props) => {
  return (
    <div className='displaycontainer'>
        <h1 style={{color:"orange"}}>{props.displayinput}</h1>
        <p>{props.btnvalue}</p>
     
    </div>
  )
}
