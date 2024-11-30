"use client";

import { handleScroll } from "./handleScroll";

const NavBar = () => {
  return (
    <div
      className={`sticky flex h-16 w-full items-center justify-between border-b-2 border-principal-color bg-white`}
    >
      <ul className="ml-2 flex h-full w-auto cursor-default items-center">
        <li className="funnel-sans-text hidden w-52 text-xl font-bold text-white hypermb:block">
          <p className="font-semibold text-text-color">{`<Michael Posada/>`}</p>
        </li>
      </ul>
      <ul className="flex h-full w-full items-center justify-between hypermb:w-auto hypermb:justify-center">
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            handleScroll();
          }}
        >
          <li className="flex h-full w-24 items-center justify-center text-xl font-semibold text-text-color transition-all duration-200 hover:cursor-pointer hover:border-x-2 hover:border-ligh-gray hover:bg-third-color hover:text-principal-color">
            Projects
          </li>
        </a>
        <a href="#contactSection">
          <li className="mr-1 flex h-full w-24 items-center justify-center text-xl font-semibold text-text-color transition-all duration-200 hover:cursor-pointer hover:border-x-2 hover:border-ligh-gray hover:bg-third-color hover:text-principal-color">
            Contact
          </li>
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
