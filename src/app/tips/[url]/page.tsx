import data from "../../../../Data/tipsData.json";
import View from "@/components/view";

export default function Page({ params }: { params: { url: string } }) {
  let tip: any;
  tip = Object.values(data.Tips).find((tip: any) => tip.url === params.url);

  if (!tip) {
    return <div>Tip not found</div>;
  }

  return (
    <View
      title={tip.title}
      category={tip.category}
      img={tip.img}
      images={Object.values(tip.images)}
      texts={Object.values(tip.texts)}
      url={tip.url}
    />
  );
}
