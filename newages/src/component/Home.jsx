import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';
import { useContext } from 'react';
import UserContext from '../context/UserContext'

const Home = () => {

  const {addsToCart}=useContext(UserContext);
  const {removeToCart}=useContext(UserContext);
  const {getCount}=useContext(UserContext);



  const [user, setUser] = useState([]);

  const handleCid = async () => {
    const data = await axios.get('https://restaurant-food-5d7o.onrender.com');
    setUser(data.data)
  }

  useEffect(() => {
    handleCid()
  }, []);

  

  return (
    <>
       <Header count={getCount()}/>
      {/* Body Section */}
      <div className="flex flex-wrap justify-center bg-gradient-to-b from-green-50 to-white min-h-screen py-10">
        {
          user.map((item, idx) => (
            <div
              key={item.id || idx}
              className="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all items-center text-center flex flex-col justify-between w-80 my-8 mx-6 border border-green-200"
            >
              <img
                className="object-cover rounded-t-2xl h-64 w-full"
                src={item.image}
                alt={item.name}
              />
              <div className="p-4">
                <h1 className="text-2xl text-green-800 font-bold mb-2">
                  {item.name}
                </h1>

                {parseFloat(item.rating) < 4 ? (
                  <p className="text-green-500 font-medium">
                    Rating: {item.rating} ⭐
                  </p>
                ) : (
                  <p className="text-yellow-500 font-semibold">
                    Rating: {item.rating} 🌟
                  </p>
                )}

                <p className="text-sm text-green-700 mt-1">
                  Category: {item.category}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  {item.description}
                </p>

                <h3 className="text-xl text-green-600 font-semibold mt-3">
                  Price: ₹{item.price}
                </h3>

                {/* Buttons */}
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={()=>{addsToCart(item)}}
                    
                    className="mx-2 rounded-lg px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-lg transition-colors"
                  >
                    Add
                  </button>
                  <button
                    onClick={()=>{removeToCart(item)}}
                    className="mx-2 rounded-lg px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-lg transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <Footer />
    </>
  );
}
export default Home



