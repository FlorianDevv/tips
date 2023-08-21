"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [inputs, setInputs] = useState<string[]>([]);

  useEffect(() => {
    const storedInputs = JSON.parse(localStorage.getItem("inputs") || "[]");
    setInputs(storedInputs);
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
    localStorage.setItem("inputs", JSON.stringify(newInputs));
  };

  const handleButtonLeftClick = (index: number) => {
    if (index > 0) {
      const newInputs = [...inputs];
      const temp = newInputs[index];
      newInputs[index] = newInputs[index - 1];
      newInputs[index - 1] = temp;
      setInputs(newInputs);
      localStorage.setItem("inputs", JSON.stringify(newInputs));
      localStorage.setItem(`input${index}`, (index - 1).toString());
      localStorage.setItem(`input${index - 1}`, index.toString());
    }
  };

  const handleButtonRightClick = (index: number) => {
    if (index < inputs.length - 1) {
      const newInputs = [...inputs];
      const temp = newInputs[index];
      newInputs[index] = newInputs[index + 1];
      newInputs[index + 1] = temp;
      setInputs(newInputs);
      localStorage.setItem("inputs", JSON.stringify(newInputs));
      localStorage.setItem(`input${index}`, (index + 1).toString());
      localStorage.setItem(`input${index + 1}`, index.toString());
    }
  };

  const handleButtonClick = () => {
    const newInputs = [...inputs, ""];
    setInputs(newInputs);
    localStorage.setItem("inputs", JSON.stringify(newInputs));
    localStorage.setItem(
      `input${newInputs.length - 1}`,
      (newInputs.length - 1).toString()
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* imput to create a title and a image presentation */}
      <input
        type="text"
        placeholder="Enter title"
        className="border border-gray-400 rounded px-2 py-1 bg-black"
      />
      <input
        type="text"
        placeholder="Enter image url"
        className="border border-gray-400 rounded px-2 py-1 bg-black mt-2 "
      />

      <button
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={handleButtonClick}
      >
        Add Text Input
      </button>
      <div className="mt-4 flex flex-col items-start">
        {inputs.map((input, index) => (
          <div key={index} className="flex items-center mt-2">
            <button
              className="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-600 mr-2"
              onClick={() => handleButtonLeftClick(index)}
              disabled={index === 0}
            >
              {"⬆"}
            </button>
            <input
              type="text"
              placeholder="Enter text"
              value={input}
              onChange={(event) => handleInputChange(event, index)}
              className="border border-gray-400 rounded px-2 py-1 bg-black"
            />
            <button
              className="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-600 ml-2"
              onClick={() => handleButtonRightClick(index)}
              disabled={index === inputs.length - 1}
            >
              {"⬇"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
