import React from 'react'
import { useNavigate } from 'react-router-dom'


const Cart = (props) => {
  
  const navigate=useNavigate();
  const handleBick=()=>{
    navigate('/');
    
  }



  return (
    <div className=' bg-black'>
      <div className=' p-28'>
        <h1 className=' bg-rose-400 text-white px-3 py-2 '>Total Cart: {props.count}</h1>
        <button className=' rounded-md px-3 py-2 bg-yellow-300 ' onClick={handleBick}>Back Home</button>
      </div>
    </div>
  )
}

export default Cart
 