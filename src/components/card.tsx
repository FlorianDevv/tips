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
    <Link href={`/tips/${props.title}`}>
      <div className="flex flex-col items-center justify-center w-1/2  bg-red-500 p-4 m-4">
        <img src={props.img} alt="image tips" />
        <h1 className="text-6xl font-bold text-center">{props.title}</h1>
        <p className="text-2xl text-center">{props.desc}</p>
      </div>
    </Link>
  );
}
