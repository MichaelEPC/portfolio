"use client";

import { handleScroll } from "./handleScroll";

const GoDownButton = () => {
  return (
    <div
      onClick={() => {
        handleScroll();
      }}
      className="h-auto w-full flex justify-center "
    >
      <div className="border-2 border-white bg-principal-color p-2 rounded-full shadow-md cursor-pointer mt-20 presm:mt-0">
        <svg
          className="fill-white"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z"></path>
        </svg>
      </div>
    </div>
  );
};

export default GoDownButton;
