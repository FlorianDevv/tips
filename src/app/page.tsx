import Card from "../components/card";
import data from "../../Data/tipsData.json";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5 mb-20">
        <h1 className="text-6xl font-bold text-center">Tips</h1>
        <p className="text-2xl text-center">
          See a lot of tips for your life !{" "}
        </p>
      </div>
      <h1 className="text-3xl font-bold text-center">Last tips:</h1>
      <div className="mx-5 flex flex-row  overflow-x-auto ">
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
      <h1 className="text-3xl font-bold text-center mt-20">Your Likes ❤️</h1>
      <div className="mx-5 flex flex-row  overflow-x-auto  ">
        <p className="m-10 text-2xl text-center">Coming soon !</p>
      </div>
    </>
  );
}
