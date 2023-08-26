export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className=" top-0 w-full justify-center p-4 bg-blur bg-gray-400 bg-opacity-10 backdrop-filter backdrop-blur-lg backdrop-saturate-150 shadow-xl ">
        <div className="flex flex-row justify-center">
          <p className="text-2xl text-center text-white">
            Made by{" "}
            <a
              href="https://github.com/FlorianDevv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              FlorianDevv
              {"  "}
            </a>
          </p>
          <p className="text-2xl text-center text-white">©{currentYear}</p>
        </div>
      </footer>
    </>
  );
}
