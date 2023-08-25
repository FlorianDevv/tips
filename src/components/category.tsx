"use client";

import * as React from "react";
import data from "../../Data/tipsData.json";
import Card from "./card";

export default function Category() {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    []
  );
  const [sortOrder, setSortOrder] = React.useState("newest");

  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSortOrderClick = () => {
    setSortOrder(sortOrder === "newest" ? "oldest" : "newest");
  };

  const filteredTips =
    selectedCategories.length === 0
      ? Object.values(data.Tips)
      : Object.values(data.Tips).filter((tip: any) =>
          selectedCategories.every((category) =>
            tip.category.includes(category)
          )
        );

  const sortedTips = [...filteredTips];

  if (sortOrder === "newest") {
    sortedTips.reverse();
  }

  return (
    <>
      <div className="relative mx-auto">
        <div className="flex flex-col items-center ">
          <div className="flex flex-row items-center ">
            <div className="bg-gray-800 text-white px-4 py-2 rounded-md bg-blur bg-opacity-10 backdrop-filter backdrop-blur-lg backdrop-saturate-150 shadow-xl">
              Categories:{" "}
              {selectedCategories.length === 0
                ? "All categories"
                : selectedCategories.join(", ")}
            </div>
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded-md bg-blur bg-opacity-10 backdrop-filter backdrop-blur-lg backdrop-saturate-150 shadow-xl ml-2 hover:bg-gray-700 transition-all duration-300 ease-in-out hover:bg-blur hover:bg-opacity-70 hover:backdrop-filter hover:backdrop-blur-lg hover:backdrop-saturate-150 hover:shadow-xl"
              onClick={handleSortOrderClick}
            >
              {sortOrder === "newest" ? "Sort by oldest" : "Sort by newest"}
            </button>
          </div>
          <ul className="p-2 bg-gray-800 text-white rounded-md  mt-2 border border-gray-700 transition-all duration-300 ease-in-out max-w-lg grid grid-cols-3 gap-2  justify-center bg-blur  bg-opacity-10 backdrop-filter backdrop-blur-lg backdrop-saturate-150 shadow-xl">
            {data.Category.map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`cursor-pointer py-1 px-2 rounded-md hover:bg-gray-700 transition-all duration-300 ease-in-out hover:bg-blur hover:bg-opacity-70 hover:backdrop-filter hover:backdrop-blur-lg hover:backdrop-saturate-150 hover:shadow-xl ${
                  selectedCategories.includes(category)
                    ? "bg-blur bg-gray-600 bg-opacity-70 backdrop-filter backdrop-blur-lg backdrop-saturate-150 shadow-xl"
                    : ""
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {sortedTips.length > 0 ? (
          <div className="flex flex-row flex-wrap justify-center">
            {sortedTips.map((tip: any, index: number) => (
              <Card
                url={tip.url}
                title={tip.title}
                category={tip.category}
                img={tip.img}
                key={index}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-4">
            {selectedCategories.length === 0
              ? "No tips found."
              : "No tips found for selected category."}
          </p>
        )}
      </div>
    </>
  );
}
