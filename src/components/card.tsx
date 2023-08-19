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
      className="flex flex-col basis-[30rem]  items-center justify-center p-5 m-4 rounded-xl shadow-md shadow-indigo-800/50 bg-[rgba(17, 25, 40, 1)] backdrop-blur-xl backdrop-saturate-200 hover:scale-105 transform transition-all duration-300 ease-in-out truncate  "
    >
      <Image
        className="opacity-90"
        src={props.img}
        alt="image tips"
        width={400}
        height={400}
      />
      <h1 className="text-white text-4xl font-bold text-center text-opacity-90 truncate ">
        {props.title}
      </h1>
      <p className="text-white text-2xl text-center text-opacity-75 ">
        {props.desc}
      </p>
    </Link>
  );
}
