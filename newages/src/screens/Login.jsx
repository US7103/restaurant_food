import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-green-300 p-8">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <img 
              src="/delboy.svg" 
              alt="The Utkarsh Kitchen Logo" 
              className="w-20 h-20 mx-auto mb-4 drop-shadow-lg"
            />
            <h1 className="text-3xl font-bold text-green-800 mb-2">
              Welcome to The Utkarsh Kitchen!
            </h1>
            <p className="text-green-600 text-sm">
              Fresh flavors, authentic recipes, unforgettable experiences
            </p>
          </div>

          {/* Welcome Message */}
          <div className="text-center mb-6">
            <p className="text-green-700/80 text-sm leading-relaxed">
              Step into a world of culinary excellence where every dish tells a story. 
              Sign in to explore our signature recipes and kitchen secrets.
            </p>
          </div>

          {/* Form Section */}
          <div className="space-y-4">
            <form action="/userwa" method="post" className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-green-700 block">
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  placeholder="chef@utkarshkitchen.com"
                  className="w-full px-4 py-3 rounded-lg border border-green-300 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition-all duration-200 text-green-900 placeholder:text-green-500"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-green-700 block">
                  Password
                </label>
                <input 
                  type="password" 
                  name="password"
                  id="password"
                  placeholder="Enter your secret recipe"
                  className="w-full px-4 py-3 rounded-lg border border-green-300 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition-all duration-200 text-green-900 placeholder:text-green-500"
                  required
                />
              </div>
              
              <input 
                type="submit" 
                value="Enter the Kitchen"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
              />
            </form>
          </div>

          {/* Footer Message */}
          <div className="text-center mt-6 pt-4 border-t border-green-200">
            <p className="text-xs text-green-600">
              🍽️ Where passion meets flavor • Est. 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

