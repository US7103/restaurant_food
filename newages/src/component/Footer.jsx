import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-green-800 text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section - Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">The Utkarsh Kitchen</h2>
          <p className="text-green-100 text-sm mt-2 italic">
            Always for You & With You!
          </p>
        </div>

        {/* Right Section - Contact */}
        <div className="text-center md:text-right mt-4 md:mt-0">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-green-100 text-sm">📍 Delhi, India</p>
          <p className="text-green-100 text-sm">📞 +91 98765 XXXXX</p>
          <p className="text-green-100 text-sm">✉️ support@utkarshkitchen.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-900 py-3">
        <p className="text-center text-green-200 text-sm">
          © {new Date().getFullYear()} The Utkarsh Kitchen. All Rights Reserved. ❤️ Thanks for visiting!
        </p>
      </div>
    </footer>
  )
}

export default Footer

