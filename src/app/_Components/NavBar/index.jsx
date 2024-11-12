const NavBar = () => {
  return (
    <div className="h-16 w-full bg-principal-color flex justify-between items-center">
      <ul className="flex items-center h-full w-auto ml-2">
        <li className="funnel-sans-text font-bold text-white text-xl w-44">
          Michael Posada
        </li>
      </ul>
      <ul className="flex items-center h-full">
        <li className="font-semibold text-white text-xl funnel-sans-text h-full w-24 justify-center flex items-center hover:bg-third-color hover:border-2 hover:border-ligh-gray transition-all duration-200 hover:text-principal-color hover:cursor-pointer shadow-lg">
          About
        </li>
        <li className="mr-1 font-semibold text-white text-xl funnel-sans-text h-full w-24 flex items-center justify-center hover:bg-third-color hover:border-2 hover:border-ligh-gray transition-all duration-200 hover:text-principal-color hover:cursor-pointer shadow-lg">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
