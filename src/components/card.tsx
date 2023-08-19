//the card includes the image, title, and description of the tips

import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  desc: string;
  img: string;
}
export default function Card(props: CardProps) {
  return (
    <Link
      href={`/tips/${props.title}`}
      className="flex flex-col items-center justify-center p-4 m-4 rounded-lg shadow-xl w-fit bg-gradient-to-br  backdrop-filter backdrop-blur-lg backdrop-saturate-150 hover:scale-105 transform transition-all duration-300 ease-in-out"
    >
      <div>
        {" "}
        <Image
          className="opacity-90"
          src={props.img}
          alt="image tips"
          width={400}
          height={400}
        />
        <h1 className="text-white text-6xl font-bold text-center text-opacity-90">
          {props.title}
        </h1>
        <p className="text-white text-2xl text-center text-opacity-75">
          {props.desc}
        </p>
      </div>
    </Link>
  );
}
