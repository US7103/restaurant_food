import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'

const Cart = () => {
  const { updateQuantity, remoToCart, getTotal, getCount, itemwa } = useContext(UserContext);

  return (
    <>
      <Header count={getCount()} />

      {/* Main Cart Section */}
      <div className="bg-gradient-to-b from-green-50 to-white min-h-screen flex flex-col items-center py-10">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 border border-green-200">
          
          {/* Empty Cart */}
          {itemwa.length === 0 ? (
            <h1 className="text-center text-xl text-green-800 font-semibold">
              Your Cart is Empty, Fill it as Hungry Men! 🍽️
            </h1>
          ) : (
            <div className="space-y-6">
              {itemwa.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm"
                >
                  {/* Product Details */}
                  <div>
                    <h2 className="text-lg font-bold text-green-800">{item.name}</h2>
                    <p className="text-gray-600">Price: ₹{item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-green-700 font-semibold">
                      Subtotal: ₹{item.price * item.quantity}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm"
                    >
                      Sub
                    </button>
                    <button
                      onClick={() => remoToCart(item.id)}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Total + Payment */}
          {itemwa.length > 0 && (
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Total Amount: ₹{getTotal()}
              </h2>
              <button className="rounded-xl px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md">
                Pay the Amount
              </button>
            </div>
          )}
        </div>

        {/* Back Home Button */}
        <div className="mt-6">
          <Link to={'/'}>
            <button className="rounded-xl px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold shadow-md">
              Back Home
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Cart

