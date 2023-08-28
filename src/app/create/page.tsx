"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [inputs, setInputs] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number>(-1);

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
    }
  };

  const handleButtonClick = () => {
    const newInputs = [...inputs, ""];
    setInputs(newInputs);
    localStorage.setItem("inputs", JSON.stringify(newInputs));
  };

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const urlPattern = /^(http|https):\/\/[^ "]+$/;
    const imageUrl = event.target.value;
    if (urlPattern.test(imageUrl)) {
      setImageUrl(imageUrl);
    } else {
      setImageUrl("");
    }
  };

  const isImageUrl = (text: string) => {
    const urlPattern = /\.(jpeg|jpg|png|webp)$/i;
    return urlPattern.test(text);
  };

  const handleDeleteClick = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
    localStorage.setItem("inputs", JSON.stringify(newInputs));
  };

  const handleResetAllClick = () => {
    setInputs([]);
    localStorage.setItem("inputs", JSON.stringify([]));
  };

  const handleEditClick = (index: number) => {
    setEditIndex(index);
  };

  const handleEditInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (editIndex !== -1) {
      const newInputs = [...inputs];
      newInputs[editIndex] = event.target.value;
      setInputs(newInputs);
      localStorage.setItem("inputs", JSON.stringify(newInputs));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* input to create a title and an image presentation */}
      <input
        type="text"
        placeholder="Enter title"
        className="border border-gray-400 rounded px-2 py-1 bg-black"
      />
      <input
        type="text"
        placeholder="Enter image url"
        className="border border-gray-400 rounded px-2 py-1 bg-black mt-2 "
        value={imageUrl}
        onChange={handleImageUrlChange}
      />
      {imageUrl && (
        <img src={imageUrl} alt="Loaded from URL" className="max-w-full mt-2" />
      )}
      <button
        className="px-4 py-2 my-1 text-white bg-red-500 rounded hover:bg-red-600 ml-2"
        onClick={handleResetAllClick}
      >
        Reset All
      </button>
      <button
        className="px-4 py-2 my-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={handleButtonClick}
      >
        Add Text or Image Input
      </button>
      <div className="mt-4 flex flex-col items-start">
        {inputs.map((input, index) => (
          <div key={index} className="flex items-center mt-2">
            <button
              className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 mr-2"
              onClick={() => handleEditClick(index)}
            >
              {"Edit"}
            </button>
            <button
              className="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-600 mr-2"
              onClick={() => handleButtonLeftClick(index)}
              disabled={index === 0}
            >
              {"⬆"}
            </button>
            {editIndex === index ? (
              <input
                placeholder="Enter text / image url"
                value={input}
                onChange={handleEditInputChange}
                className="border border-gray-400 rounded px-2 py-1 bg-black"
                id={`input-${index}`}
              />
            ) : isImageUrl(input) ? (
              <img
                src={input}
                alt="Loaded from URL"
                className="max-w-full mt-2"
              />
            ) : (
              <input
                type="text"
                placeholder="Enter text / image url"
                value={input}
                onChange={(event) => handleInputChange(event, index)}
                className="border border-gray-400 rounded px-2 py-1 bg-black"
                id={`input-${index}`}
              />
            )}
            <button
              className="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-600 ml-2"
              onClick={() => handleButtonRightClick(index)}
              disabled={index === inputs.length - 1}
            >
              {"⬇"}
            </button>
            <button
              className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600 ml-2"
              onClick={() => handleDeleteClick(index)}
            >
              {"X"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
