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
      className={`${className} flex w-auto h-auto`}
      src={content}
      sizes={sizes}
      width={400}
      height={400}
      alt=""
    ></Image>
  );
}
