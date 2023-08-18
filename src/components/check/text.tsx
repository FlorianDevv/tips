import React from "react";

interface TextProps {
  text: string;
}

export default function Text(props: TextProps) {
  const [tag, content] = props.text.split("|").filter(Boolean);

  switch (tag) {
    case "h1":
      return <h1 className="text-4xl text-center">{content}</h1>;
    case "h2":
      return <h2 className="text-3xl text-center">{content}</h2>;
    case "h3":
      return <h3 className="text-2xl text-center">{content}</h3>;
    case "h4":
      return <h4 className="text-xl text-center">{content}</h4>;
    default:
      return <p className="text-2xl text-center">{props.text}</p>;
  }
}
