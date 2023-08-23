import React from 'react'

function Product(props) {
    
  return (
 <div>
<h1>Product : {props.name}</h1>
<h2>Price : {props.price}</h2>
<h3>Quality : {props.quality}</h3>

<h3>{props.total}</h3>

 </div>
  )
}

export default Product
