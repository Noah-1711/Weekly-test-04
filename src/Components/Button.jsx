import React from 'react'
import './Button.css'

export const Button = (props) => {
    const cal=(ele)=>{
        props.setbtnvalue(props.btnvalue+ele)

    }
    
  return (
        <button style={{height:props.height,width:props.width, background:props.bgcolor}}
        value={props.text}
        onClick={(ele)=>{
            const currentvalue=ele.target.value
           cal(currentvalue)


        }}
        >{props.text}</button>
  )
}
