import Card from "../components/card";
import data from "../../Data/tipsData.json";

export default function Home() {
  return (
    <>
      <h1 className="text-6xl font-bold text-center">Last tips</h1>
      <div className="flex flex-collum flex-wrap justify-center ">
        {Object.values(data.Tips)
          .reverse()
          .map((tip: any, index: number) => (
            <Card
              url={tip.url}
              title={tip.title}
              category={tip.category}
              img={tip.img}
              key={index}
            />
          ))}
      </div>
    </>
  );
}
