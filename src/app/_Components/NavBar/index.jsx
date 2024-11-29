"use client";

import { handleScroll } from "./handleScroll";

const NavBar = () => {
  return (
    <div
      className={`h-16 w-full border-b-2 border-principal-color bg-white sticky flex justify-between items-center`}
    >
      <ul className=" cursor-default flex items-center h-full w-auto ml-2">
        <li className="funnel-sans-text font-bold text-white text-xl w-52 hidden hypermb:block">
          <p className="font-semibold text-text-color">{`<Michael Posada/>`}</p>
        </li>
      </ul>
      <ul className="flex items-center h-full w-full justify-between hypermb:w-auto hypermb:justify-center">
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            handleScroll();
          }}
        >
          <li className="font-semibold text-xl h-full text-text-color w-24 justify-center flex items-center hover:bg-third-color hover:border-x-2 hover:border-ligh-gray transition-all duration-200 hover:text-principal-color hover:cursor-pointer">
            Projects
          </li>
        </a>
        <a href="#contactSection">
          <li className="mr-1 font-semibold text-xl h-full text-text-color w-24 justify-center flex items-center hover:bg-third-color hover:border-x-2 hover:border-ligh-gray transition-all duration-200 hover:text-principal-color hover:cursor-pointer">
            Contact
          </li>
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
