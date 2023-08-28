/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";

export default function Preview() {
  const [title, setTitle] = useState<string>("");
  const [inputs, setInputs] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const storedInputs = JSON.parse(localStorage.getItem("inputs") || "[]");
    setInputs(storedInputs);
    const storedTitle = localStorage.getItem("title") || "";
    const storedImageUrl = localStorage.getItem("imageUrl") || "";
    setTitle(storedTitle);
    setImageUrl(storedImageUrl);
  }, []);

  const isImageUrl = (text: string) => {
    const urlPattern = /\.(jpeg|jpg|png|webp)$/i;
    return urlPattern.test(text);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {imageUrl && (
        <img src={imageUrl} alt="Loaded from URL" className="max-w-full mt-2" />
      )}
      <h1 className="text-3xl font-bold mt-2">{title}</h1>
      <div className="mt-4 flex flex-col items-start">
        {inputs.map((input, index) => (
          <div key={index} className="flex items-center mt-2">
            {isImageUrl(input) ? (
              <img
                src={input}
                alt="Loaded from URL"
                className="max-w-full mt-2"
              />
            ) : (
              <p className="text-lg">{input}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
