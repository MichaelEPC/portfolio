import Image from "next/image";

const ExperienceItems = ({ name, tagName, time, description, img }) => {
  return (
    <li className=" mb:mb-10 pl-2 mb:pl-0 mb:ms-6 flex">
      <span className="absolute items-center hidden mb:flex justify-center w-6 h-6 bg-white border-2 border-principal-color rounded-full -start-3 ring-8 ring-white">
        <svg
          className="w-2.5 h-2.5 text-principal-color dark:text-blue-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>
      <div className="flex h-auto w-full items-center liAnimated flex-col-reverse mt-1 mb-1 xl:flex-row xl:mt-0 xl:mb-0">
        <div className="border-0 2xl:border-r-2 border-gray-200 pr-2">
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
            {name}
            <span className="bg-white text-principal-color text-sm border-2 border-slate-500 font-medium me-2 px-2.5 py-0.5 rounded ms-3">
              {tagName}
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
            {time}
          </time>
          <p className="mb-4 text-base font-normal h-auto w-[300px] hypermb:w-[400px] smde:w-[400px] premd:w-[600px] md:w-[800px] text-text-color dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-center rounded-full shadow-lg ml-4 border-2 border-ligh-gray p-1 mb-5 2xl:mb-0">
          <Image src={img} alt={img} className="rounded-full h-auto w-44" />
        </div>
      </div>
    </li>
  );
};

export default ExperienceItems;
