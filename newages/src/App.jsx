import React, { useEffect, useState } from 'react'
import Header from './component/Header'
import axios from 'axios';
import Footer from './component/Footer';


const App = () => {
  
  
  const [count, setCount] = useState(0);
  const [cartCount, setCartCount] = useState(false);

  const addToCart=()=>{
    setCount(prev=>prev+1);
  }

  const remoToCart=()=>{
    if(count===0){
      setCount(prev=>prev)
    }else{
      setCount(prev=>prev-1)
    }
  }
   
  

  const [user, setUser] = useState([]);

  const handleCid= async ()=>{

    const data=await axios.get('http://localhost:4000/');
    setUser(data.data)

  }

  useEffect(() => {
    handleCid()
    
  }, []);

 
  return (
    <>
    


    <Header onCartClick={()=>setCartCount(prev=>!prev)} count={count} />
    
    <div className='flex-wrap flex'>
      {
      user.map((item,idx)=>(
        
      <div key={item.id || idx} className=' rounded-2xl bg-zinc-900 items-center text-center flex flex-col justify-center w-80 my-8 mx-16'>
        <img className=' object-cover rounded-t-xl h-80 w-80' src={item.image} alt="" />
        <h1  className=' text-2xl text-white font-semibold '>{item.name}</h1>
        {parseFloat(item.rating)<4?(<p className="text-blue-400">Rating: {item.rating} ⭐</p>):(<p className="text-yellow-400">Rating: {item.rating} 🌟</p>)}

        <p className='text-lime-400'>Category: {item.category}</p>
        <p className=' text-rose-400 text-lg'>Descrption: {item.description}</p>
        <h3 className=' text-xl text-green-600  '>Price: Rs.{item.price}</h3>
        <div className=' mt-2'>
        <button onClick={addToCart} className='  mx-3 rounded-lg px-3 py-2 bg-emerald-700 text-white text-lg '>Add</button>
        <button onClick={remoToCart} className=' mx-3 rounded-md px-3 py-2 bg-red-700 text-white text-lg '>Remove</button>
        </div>
      </div>
      ))
      }
    </div>
     
    <Footer/>
    </>
   );

}
export default App

