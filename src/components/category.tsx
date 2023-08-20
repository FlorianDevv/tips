"use client";
import * as React from "react";
import data from "../../Data/tipsData.json";

export default function Category() {
  const [showMenu, setShowMenu] = React.useState(false);
  const [selectedCategory, setSelectedCategory] =
    React.useState("All categories");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setShowMenu(false);
  };

  return (
    <div className="relative flex justify-center">
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded-md"
        onClick={toggleMenu}
      >
        Categories: {selectedCategory}
      </button>
      {showMenu && (
        <ul className="absolute p-2 bg-gray-800 text-white rounded-md shadow-md z-10 mt-10">
          {data.Category.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`cursor-pointer py-1 px-2 rounded-md hover:bg-gray-600 ${
                selectedCategory === category ? "bg-gray-700" : ""
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
