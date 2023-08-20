import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex flex-row z-10 sticky top-0 w-full justify-center p-4  bg-blur bg-gray-400 bg-opacity-10 backdrop-filter backdrop-blur-lg backdrop-saturate-150 shadow-xl">
      <Link
        href="/"
        className="text-xl flex font-bold cursor-pointer brightness-90 hover:brightness-200 hover:scale-105 transform transition-all duration-300 ease-in-out m-5 mb-0 mt-0 hover:drop-shadow-[0_2px_8px_rgba(255,255,255,0.70)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#FFFFFF"
            d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"
          ></path>
        </svg>
        Home
      </Link>

      <Link
        href="/tips"
        className="text-xl flex font-bold cursor-pointer brightness-90 hover:brightness-200 hover:scale-105 transform transition-all duration-300 ease-in-out m-5 mb-0 mt-0 hover:drop-shadow-[0_2px_8px_rgba(255,255,255,0.70)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#FFFFFF"
            d="M 11 0 L 11 3 L 13 3 L 13 0 L 11 0 z M 4.2226562 2.8085938 L 2.8085938 4.2226562 L 4.9296875 6.34375 L 6.34375 4.9296875 L 4.2226562 2.8085938 z M 19.777344 2.8085938 L 17.65625 4.9296875 L 19.070312 6.34375 L 21.191406 4.2226562 L 19.777344 2.8085938 z M 12 5 C 8.1456661 5 5 8.1456661 5 12 C 5 14.767788 6.6561188 17.102239 9 18.234375 L 9 21 C 9 22.093063 9.9069372 23 11 23 L 13 23 C 14.093063 23 15 22.093063 15 21 L 15 18.234375 C 17.343881 17.102239 19 14.767788 19 12 C 19 8.1456661 15.854334 5 12 5 z M 12 7 C 14.773666 7 17 9.2263339 17 12 C 17 14.184344 15.605334 16.022854 13.666016 16.708984 L 13 16.943359 L 13 21 L 11 21 L 11 16.943359 L 10.333984 16.708984 C 8.3946664 16.022854 7 14.184344 7 12 C 7 9.2263339 9.2263339 7 12 7 z M 0 11 L 0 13 L 3 13 L 3 11 L 0 11 z M 21 11 L 21 13 L 24 13 L 24 11 L 21 11 z M 4.9296875 17.65625 L 2.8085938 19.777344 L 4.2226562 21.191406 L 6.34375 19.070312 L 4.9296875 17.65625 z M 19.070312 17.65625 L 17.65625 19.070312 L 19.777344 21.191406 L 21.191406 19.777344 L 19.070312 17.65625 z"
          ></path>
        </svg>
        Tips
      </Link>

      <Link
        href="/create"
        className="text-xl flex font-bold cursor-pointer brightness-90 hover:brightness-200 hover:scale-105 transform transition-all duration-300 ease-in-out m-5 mb-0 mt-0 hover:drop-shadow-[0_2px_8px_rgba(255,255,255,0.70)]"
      >
        <svg
          version="1.1"
          id="Uploaded to svgrepo.com"
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 32 32"
        >
          <path
            fill="#FFFFFF"
            d="M24,15v2h-7v7h-2v-7H8v-2h7V8h2v7H24z M24.485,24.485c-4.686,4.686-12.284,4.686-16.971,0
	c-4.686-4.686-4.686-12.284,0-16.971c4.687-4.686,12.284-4.686,16.971,0C29.172,12.201,29.172,19.799,24.485,24.485z M23.071,8.929
	c-3.842-3.842-10.167-3.975-14.142,0c-3.899,3.899-3.899,10.243,0,14.142c3.975,3.975,10.301,3.841,14.142,0
	C26.97,19.172,26.97,12.828,23.071,8.929z"
          />
        </svg>
        Create Tip
      </Link>
    </header>
  );
}
