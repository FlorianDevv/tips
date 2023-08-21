"use client";

import { useState, useEffect } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // Retrieve the like state from local storage
    const likedState = localStorage.getItem("liked");
    if (likedState) {
      setLiked(true);
    }

    // Retrieve the total number of likes from local storage
    const likesCount = localStorage.getItem("likes");
    if (likesCount) {
      setLikes(parseInt(likesCount));
    }
  }, []);

  const handleLike = () => {
    if (!liked) {
      // Increment the total number of likes and store it in local storage
      const newLikesCount = likes + 1;
      localStorage.setItem("likes", newLikesCount.toString());
      setLikes(newLikesCount);

      // Store the like state in local storage
      localStorage.setItem("liked", "true");
      setLiked(true);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`p-2 rounded-full ${liked ? "bg-red-900 " : "bg-gray-200"}`}
        onClick={handleLike}
        disabled={liked}
      >
        <p className="text-xl">❤️</p>
      </button>
    </div>
  );
}
