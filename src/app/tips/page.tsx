import Card from "@/components/card";
import data from "../../../Data/tipsData.json";

export default function Home() {
  return (
    <>
      {Object.values(data.Tips).map((tip: any, index: number) => (
        <Card title={tip.title} desc={tip.desc} img={tip.img} key={index} />
      ))}
    </>
  );
}
