import React from 'react'
//recive the data from parent component
const Greeting = (props) => {
  return (
    <div>
      <h1 style={{backgroundColor:'yellow'}}>Hello,{props.name}</h1>
    </div>
  )
}

export default Greeting
