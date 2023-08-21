import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  category: string;
  img: string;
  url: string;
}

export default function Card(props: CardProps) {
  return (
    <Link
      href={`/tips/${props.url}`}
      className="flex flex-col shrink-0  items-center justify-center p-4 m-4 hover:scale-105 transform transition-all duration-300 ease-in-out  rounded-lg shadow-xl bg-opacity-5 bg-gray-200 hover:shadow-xl hover:ring-2 hover:ring-white hover:brightness-110"
    >
      <Image
        className="opacity-90"
        src={props.img}
        alt="image tips"
        placeholder="blur"
        blurDataURL={"src/images/placeholder.webp"}
        width={400}
        height={400}
      />
      <h1 className="text-white text-2xl font-bold text-center text-opacity-90 truncate ">
        {props.title}
      </h1>
      <div className="flex flex-row items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          fill="none"
          x="0px"
          y="0px"
          className="w-6 h-6 text-white"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 2H12V10.4338L8 12.8338L4 10.4338V2ZM3 2C3 1.44772 3.44772 1 4 1H12C12.5523 1 13 1.44772 13 2V10.4338C13 10.7851 12.8157 11.1106 12.5145 11.2913L8.5145 13.6913C8.19781 13.8813 7.80219 13.8813 7.4855 13.6913L3.4855 11.2913C3.1843 11.1106 3 10.7851 3 10.4338V2ZM7 5C7 4.44772 7.44772 4 8 4C8.55228 4 9 4.44772 9 5C9 5.55228 8.55228 6 8 6C7.44772 6 7 5.55228 7 5ZM8 3C6.89543 3 6 3.89543 6 5C6 6.10457 6.89543 7 8 7C9.10457 7 10 6.10457 10 5C10 3.89543 9.10457 3 8 3Z"
            fill="white"
          />
        </svg>
        <p className="text-white text-xl text-center text-opacity-75  ">
          {props.category}
        </p>
      </div>
    </Link>
  );
}
