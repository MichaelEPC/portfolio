import Image from "next/image";

const ExperienceItems = ({ name, tagName, time, description, img }) => {
  return (
    <li className="flex pl-2 mb:mb-10 mb:ms-6 mb:pl-0">
      <span className="absolute -start-3 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-principal-color bg-white ring-8 ring-white mb:flex">
        <svg
          className="h-2.5 w-2.5 text-principal-color"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>
      <div className="liAnimated mb-1 mt-1 flex h-auto w-full flex-col-reverse items-center xl:mb-0 xl:mt-0 xl:flex-row">
        <div className="2xl:border-r-2 border-0 border-gray-200 pr-2">
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900">
            {name}
            <span className="me-2 ms-3 rounded border-2 border-slate-500 bg-white px-2.5 py-0.5 text-sm font-medium text-principal-color">
              {tagName}
            </span>
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400">
            {time}
          </time>
          <p className="hypermb:w-[400px] smde:w-[400px] premd:w-[600px] mb-4 h-auto w-[300px] text-base font-normal text-text-color md:w-[800px] dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="2xl:mb-0 mb-5 ml-4 flex items-center justify-center rounded-full border-2 border-ligh-gray p-1 shadow-lg">
          <Image src={img} alt={img} className="h-auto w-44 rounded-full" />
        </div>
      </div>
    </li>
  );
};

export default ExperienceItems;
