"use client";

import { useState, useEffect } from "react";

interface Props {
  url: string;
}

export default function LikeButton(props: Props) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // Retrieve the like state from local storage
    const likedState = localStorage.getItem(`liked-${props.url}`);
    if (likedState) {
      setLiked(true);
    }

    // Retrieve the total number of likes from local storage
    const likesCount = localStorage.getItem(`likes-${props.url}`);
    if (likesCount) {
      setLikes(parseInt(likesCount));
    }
  }, [props.url]);

  const handleLike = () => {
    if (!liked) {
      // Increment the total number of likes and store it in local storage
      const newLikesCount = likes + 1;
      localStorage.setItem(`likes-${props.url}`, newLikesCount.toString());
      setLikes(newLikesCount);

      // Store the like state in local storage
      localStorage.setItem(`liked-${props.url}`, "true");
      setLiked(true);
    }
  };

  const handleUnlike = () => {
    if (liked) {
      // Decrement the total number of likes and store it in local storage
      const newLikesCount = likes - 1;
      localStorage.setItem(`likes-${props.url}`, newLikesCount.toString());
      setLikes(newLikesCount);

      // Remove the like state from local storage
      localStorage.removeItem(`liked-${props.url}`);
      setLiked(false);
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
      <button
        className={`p-2 rounded-full ${liked ? "bg-gray-200 " : "bg-red-900"}`}
        onClick={handleUnlike}
        disabled={!liked}
      >
        <p className="text-xl">💔</p>
      </button>
      <span className="text-gray-500">{likes}</span>
    </div>
  );
}
