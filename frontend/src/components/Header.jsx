import React from "react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-black text-white shadow-lg py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <img src="/logo.jpg" alt="Logo" className="w-14 rounded-md" />
          <span className="hidden md:inline-block">Brand Name</span>
        </div>

        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 border rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Navigation & Icons */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-white hover:text-gray-200 font-semibold"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-white hover:text-gray-200 font-semibold"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-200 font-semibold"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-200 font-semibold"
            >
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex space-x-4">
            <button className="text-white hover:text-gray-200">
              <FaUser size={22} />
            </button>
            <button className="text-white hover:text-gray-200 relative">
              <Link to="/cart">
                <FaShoppingCart size={22} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  2
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
