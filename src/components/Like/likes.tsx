"use client";

import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  url: string;
}

export default function LikeButton(props: Props) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [animating, setAnimating] = useState(false);

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
      setAnimating(true);
    } else {
      // Decrement the total number of likes and store it in local storage
      const newLikesCount = likes - 1;
      localStorage.setItem(`likes-${props.url}`, newLikesCount.toString());
      setLikes(newLikesCount);

      // Remove the like state from local storage
      localStorage.removeItem(`liked-${props.url}`);
      setLiked(false);
      setAnimating(true);
    }
  };

  const animationProps = useSpring({
    transform: animating ? "scale(1.5)" : "scale(1)",
    config: { tension: 300, friction: 10 },
    onRest: () => setAnimating(false),
  });

  return (
    <div className="flex items-center space-x-2">
      <animated.button
        className={`p-2 rounded-full bg-gray-200 bg-opacity-50 hover:bg-opacity-70 shadow-lg ${
          liked ? "bg-red-900 " : ""
        }`}
        onClick={handleLike}
        style={animationProps}
      >
        <p className="text-xl">{liked ? "❤️" : "🤍"}</p>
      </animated.button>
    </div>
  );
}
