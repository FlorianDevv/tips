import { Tip } from "../../Data/types";
import Text from "../components/check/text";
export default function View(props: Tip) {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <img src={props.img} alt="image tips" width={500} height={500} />
      <h1 className="text-6xl font-bold text-center">{props.title}</h1>
      <p className="text-2xl text-center">{props.desc}</p>
      {props.images.map((image, index) => (
        <div key={index}>
          {image && <img src={image} alt="tip image" />}
          {props.texts[index] && <Text text={props.texts[index]} />}
        </div>
      ))}
    </div>
  );
}
