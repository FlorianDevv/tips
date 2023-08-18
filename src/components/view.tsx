import Image from "next/image";
import { Tip } from "../../Data/types";

export default function View(props: Tip) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <img src={props.img} alt="image tips" width={500} height={500} />
      <h1 className="text-6xl font-bold text-center">{props.title}</h1>
      <p className="text-2xl text-center">{props.desc}</p>
    </div>
  );
}
