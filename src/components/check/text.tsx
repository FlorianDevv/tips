import React from "react";

interface TextProps {
  text: string;
}

export default function Text(props: TextProps) {
  const [className, content] = props.text.split("|").filter(Boolean);

  return <p className={`flex ${className}`}>{content}</p>;
}
