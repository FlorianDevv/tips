import { Tip } from "../../../../Data/types";
import Image from "next/image";
import Card from "../../../components/card";
import data from "../../../../Data/tipsData.json";
import View from "@/components/view";

export default function Page({ params }: { params: { title: string } }) {
  const tip: any | undefined = Object.values(data.Tips).find(
    (tip: any) => tip.title === params.title
  );

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
    />
  );
}
