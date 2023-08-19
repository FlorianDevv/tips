import Card from "@/components/card";
import data from "../../../Data/tipsData.json";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">Tips</h1>
        <p className="text-2xl text-center">Order tips by categories </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {Object.values(data.Tips).map((tip: any, index: number) => (
          <Card title={tip.title} desc={tip.desc} img={tip.img} key={index} />
        ))}
      </div>
    </>
  );
}
