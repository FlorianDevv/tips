import Category from "@/components/category";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">Tips</h1>
        <p className="text-2xl text-center">Search tips by categories </p>
      </div>
      <Category />
    </>
  );
}
