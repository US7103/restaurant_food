import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './component/Cart'
import Home from './component/Home'
import Login from './screens/Login'



const App = () => {

  
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />

    </Routes>
    </>
   
  )
}

export default App
