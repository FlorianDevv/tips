import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center w-full h-1/4 bg-red-500 p-4">
      <Link href="/">
        <h1 className="text-6xl font-bold text-center cursor-pointer">
          Tips **Home**
        </h1>
      </Link>
    </header>
  );
}
