import React from 'react'
import './Display.css'

export const Display = (props) => {
  return (
    <div className='displaycontainer'>
        <input  value={props.btnvalue}type="text" />
    </div>
  )
}
