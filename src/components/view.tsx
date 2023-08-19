import { Tip } from "../../Data/types";
import Text from "../components/check/text";
import Images from "../components/check/image";
import Image from "next/image";
// This component displays a set of tips with images and text
// It receives a Tip object as props
export default function View(props: Tip) {
  return (
    <div className="flex flex-col  mt-2">
      <div className="flex flex-col items-center justify-center">
        <Image src={props.img} alt="image tips" width={500} height={500} />
        <h1 className="text-6xl font-bold text-center">{props.title}</h1>
      </div>
      <p className="text-2xl text-center">{props.desc}</p>
      {/* // For each image and text in the tip, a div is created with the corresponding component */}
      {props.images.map((image, index) => (
        <div key={index}>
          {/* // If there is an image, it is displayed with the Images component */}
          {image && <Images image={image} />}
          {/* // If there is text, it is displayed with the Text component */}
          {props.texts[index] && <Text text={props.texts[index]} />}
        </div>
      ))}
    </div>
  );
}
