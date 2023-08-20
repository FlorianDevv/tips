"use client";

import * as React from "react";
import data from "../../Data/tipsData.json";
import Card from "./card";

export default function Category() {
  const [showMenu, setShowMenu] = React.useState(false);
  const [selectedCategory, setSelectedCategory] =
    React.useState("All categories");
  const [sortOrder, setSortOrder] = React.useState("newest");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setShowMenu(false);
  };

  const handleSortOrderClick = () => {
    setSortOrder(sortOrder === "newest" ? "oldest" : "newest");
  };

  const filteredTips =
    selectedCategory === "All categories"
      ? Object.values(data.Tips)
      : Object.values(data.Tips).filter(
          (tip: any) => tip.category === selectedCategory
        );

  const sortedTips = filteredTips.sort((a: any, b: any) => {
    if (sortOrder === "newest") {
      return b.index - a.index;
    } else {
      return a.index - b.index;
    }
  });

  return (
    <div className="relative mx-auto">
      <div className="flex flex-col items-center ">
        <div className="flex flex-row items-center ">
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-md"
            onClick={toggleMenu}
          >
            Categories: {selectedCategory}
          </button>
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-md ml-2"
            onClick={handleSortOrderClick}
          >
            {sortOrder === "newest" ? "Sort by oldest" : "Sort by newest"}
          </button>
        </div>
        {showMenu && (
          <ul
            className={`sticky p-2 bg-gray-800 text-white rounded-md shadow-md z-50 mt-2 border border-gray-700 transition-all max-w-xs ${
              showMenu ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
            }`}
          >
            {["All categories", ...data.Category].map((category) => (
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

      {sortedTips.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-center">
          {sortedTips.map((tip: any, index: number) => (
            <Card
              title={tip.title}
              category={tip.category}
              img={tip.img}
              key={index}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No tips found for selected category.
        </p>
      )}
    </div>
  );
}
