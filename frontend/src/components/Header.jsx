import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Pitch & Thread</div>

        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 border rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Navigation & Icons */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-green-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              Shop
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              Contact
            </a>
          </nav>

          {/* Icons */}
          <div className="flex space-x-4">
            <button className="text-gray-700 hover:text-green-600">
              <FaUser size={20} />
            </button>
            <button className="text-gray-700 hover:text-green-600 relative">
              <FaShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
