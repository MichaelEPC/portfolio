import style from "./style.module.css";

const NavBar = () => {
  return (
    <div
      className={`h-16 w-full border-b-2 border-principal-color bg-white sticky flex justify-between items-center`}
    >
      <ul className="flex items-center h-full w-auto ml-2">
        <li className="funnel-sans-text font-bold text-white text-xl w-52">
          <p className="font-semibold text-text-color">{`<Michael Posada/>`}</p>
        </li>
      </ul>
      <ul className="flex items-center h-full">
        <li className="font-semibold text-xl h-full text-text-color w-24 justify-center flex items-center hover:bg-third-color hover:border-x-2 hover:border-ligh-gray transition-all duration-200 hover:text-principal-color hover:cursor-pointer">
          Projects
        </li>
        <li className="mr-1 font-semibold text-xl h-full text-text-color w-24 justify-center flex items-center hover:bg-third-color hover:border-x-2 hover:border-ligh-gray transition-all duration-200 hover:text-principal-color hover:cursor-pointer">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
