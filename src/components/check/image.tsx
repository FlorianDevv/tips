import React from "react";
import Image from "next/image";
interface ImageProps {
  image: string;
}

export default function Images(props: ImageProps) {
  const [sizes, className, content] = props.image.split("|").filter(Boolean);

  if (!content || content.trim().length === 0) {
    return null;
  }
  return (
    <Image
      className={`${className}`}
      src={content}
      sizes={sizes || "60vw"}
      width={200}
      height={200}
      layout="responsive"
      alt=""
    ></Image>
  );
}
