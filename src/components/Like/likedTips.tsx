"use client";
import Card from "../card";
import data from "../../../Data/tipsData.json";

export default function LikedTips() {
  let likedTips: any[] = [];

  if (typeof window !== "undefined") {
    const likedTipsUrls = Object.keys(localStorage).filter((key) =>
      key.startsWith("liked-")
    );

    likedTips = likedTipsUrls
      .map((url) => {
        const tip = Object.values(data.Tips).find(
          (tip: any) => `liked-${tip.url}` === url
        );
        return tip;
      })
      .filter((tip) => tip !== undefined);
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-20">Your Likes ❤️</h1>
      <div className="mx-5 flex flex-row  overflow-x-auto  ">
        {likedTips.length > 0 ? (
          likedTips.map((tip: any, index: number) => (
            <Card
              url={tip.url}
              title={tip.title}
              category={tip.category}
              img={tip.img}
              key={index}
            />
          ))
        ) : (
          <p className="mx-auto text-gray-500 mt-4">No liked tips yet.</p>
        )}
      </div>
    </>
  );
}
