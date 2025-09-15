import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="flex items-center justify-between w-full bg-green-700 text-white px-6 py-4 shadow-md">
      {/* Branding + Slogan */}
      <div className="flex items-center gap-4">
        <img
          className="h-[60px] rounded-full bg-white p-1"
          src="delboy.svg"
          alt="Logo"
        />
        <div>
          <h1 className="text-2xl font-bold">The Utkarsh Kitchen</h1>
          <p className="text-sm italic text-green-100">
            Always for You & With You!
          </p>
        </div>
      </div>

      {/* Right Section (Cart) */}
      <div className="flex items-center gap-6">
        <Link
          to="/cart"
          className="relative flex items-center hover:scale-105 transition-transform"
        >
          <img className="h-[36px]" src="Card-1.svg" alt="Cart Icon" />
          {props.count > 0 && (
            <span className="absolute -top-2 -right-3 bg-white text-green-700 text-xs font-bold rounded-full px-2">
              {props.count}
            </span>
          )}
        </Link>
    
      </div>
    </header>
  );
};

export default Header;
