import Category from "@/components/category";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className="text-6xl font-bold text-center m-3">Tips</h1>
        <p className="text-2xl text-center mb-3 ">Search tips by categories </p>
      </div>
      <Category />
    </>
  );
}
