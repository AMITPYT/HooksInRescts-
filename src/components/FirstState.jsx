import React, {useState} from 'react'

function FirstState() {
const [inputValue, setInputValue] = useState("dfff")

let onChange = (event)=>{
    const newValue = event.target.value
    setInputValue(newValue)
    
}
  return (
    <div>
        <input placeholder='enter something....' onChange={onChange}></input>
        {inputValue}
        
    </div>
  )
}


export default FirstState