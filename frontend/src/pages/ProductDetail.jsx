import React from "react";

const ProductDetail = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 rounded-lg shadow-lg">
      {/* Left: Product Image */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/500"
          alt="Light Gray Top for Women"
          className="w-full rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        />
        <div className="flex mt-4 space-x-2">
          <img
            src="https://via.placeholder.com/100"
            alt="Thumbnail 1"
            className="w-16 h-16 rounded-lg cursor-pointer border hover:border-green-500 transition"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Thumbnail 2"
            className="w-16 h-16 rounded-lg cursor-pointer border hover:border-green-500 transition"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Thumbnail 3"
            className="w-16 h-16 rounded-lg cursor-pointer border hover:border-green-500 transition"
          />
        </div>
      </div>

      {/* Right: Product Details */}
      <div className="p-4">
        <p className="text-sm text-green-600 font-semibold uppercase tracking-wider">
          Minimal Women Collection
        </p>
        <h1 className="text-3xl font-bold mt-2 text-gray-800">
          Light Gray Top for Women
        </h1>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-gray-500 line-through text-lg">$50</p>
          <p className="text-3xl font-bold text-green-600">$40</p>
        </div>
        <p className="text-sm text-gray-400 mt-1">Inclusive of all taxes</p>

        {/* Size Selection */}
        <div className="mt-6">
          <p className="font-semibold text-gray-700">Select Size</p>
          <div className="flex space-x-3 mt-2">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-green-500 hover:text-white transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-3 bg-gray-200 text-black rounded-lg font-semibold hover:bg-gray-300 transition">
            ❤️ Wishlist
          </button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition shadow-lg">
            Add to Cart
          </button>
        </div>

        {/* Product Details */}
        <div className="mt-8 border-t pt-4">
          <h3 className="font-semibold text-gray-700 text-lg">
            Product Details
          </h3>
          <p className="text-gray-600 mt-2">
            Light Gray solid Top, has a boat neck, 3/4 sleeves.
          </p>
        </div>

        {/* Material & Care */}
        <div className="mt-6 border-t pt-4">
          <h3 className="font-semibold text-gray-700 text-lg">
            Material & Care
          </h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Cotton</li>
            <li>Machine-wash</li>
          </ul>
        </div>

        {/* Seller Info */}
        <div className="mt-6 border-t pt-4">
          <h3 className="font-semibold text-gray-700 text-lg">Sold By</h3>
          <p className="text-blue-600 font-semibold">
            Wind It Store, Stillwater
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>95% Positive Feedback</li>
            <li>50+ Products</li>
            <li>Comes with a 6-month Warranty</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
