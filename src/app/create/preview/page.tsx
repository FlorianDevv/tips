/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

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
      <Link href="/create">
        <button className="px-4 py-2 my-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Back
        </button>
      </Link>

      {imageUrl && (
        <img src={imageUrl} alt="Loaded from URL" className="max-w-full mt-2" />
      )}
      <h1 className="text-3xl font-bold mt-2">{title}</h1>
      <div className="mt-4 flex flex-col w-full ">
        {inputs.map((input, index) => (
          <div key={index} className="flex items-center text-center mt-2 ">
            {isImageUrl(input) ? (
              <img
                src={input}
                alt="Loaded from URL"
                className="max-w-full mt-2"
              />
            ) : (
              <div className="whitespace-pre-wrap w-full">
                <p className="text-lg p-4 max-w-full break-words">{input}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
