import { useState } from 'react'
import React from 'react'


const Count = () => {
  
    const [count, setCount] = useState(0)

    const handle=()=>{
        setCount(count+1)
    }
  return (
    
    <div>
         <h1>{count}</h1>
      <button onClick={handle}>+</button>
     
    </div>
  )
}

export default Count
