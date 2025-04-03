import { useState } from "react";

const Sidebar = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedRating, setSelectedRating] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange({ category, priceRange, rating: selectedRating });
  };

  const handlePriceChange = (event) => {
    const value = event.target.value.split(",").map(Number);
    setPriceRange(value);
    onFilterChange({
      category: selectedCategory,
      priceRange: value,
      rating: selectedRating,
    });
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
    onFilterChange({ category: selectedCategory, priceRange, rating });
  };

  return (
    <div className="w-64 p-4 bg-gray-100 h-screen fixed left-0 top-0 overflow-y-auto shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Category</h3>
        <ul>
          {categories?.map((category) => (
            <li key={category} className="mb-1">
              <button
                className={`w-full text-left p-1 rounded hover:bg-gray-200 ${
                  selectedCategory === category ? "bg-gray-300" : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Price Range</h3>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={priceRange[0]}
          onChange={(e) =>
            handlePriceChange({
              target: {
                value: [Number(e.target.value), priceRange[1]].toString(),
              },
            })
          }
          className="w-full"
        />
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={priceRange[1]}
          onChange={(e) =>
            handlePriceChange({
              target: {
                value: [priceRange[0], Number(e.target.value)].toString(),
              },
            })
          }
          className="w-full"
        />
        <p className="text-sm text-gray-600">
          ${priceRange[0]} - ${priceRange[1]}
        </p>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="font-medium mb-2">Rating</h3>
        <div className="flex space-x-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              className={`px-3 py-1 rounded border ${
                selectedRating === rating ? "bg-yellow-400" : "bg-white"
              }`}
              onClick={() => handleRatingChange(rating)}
            >
              {rating} ★
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
