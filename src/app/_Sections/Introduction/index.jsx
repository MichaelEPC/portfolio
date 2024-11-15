import Image from "next/image";
import style from "./style.module.css";
import EmojiFace from "../../public/emojiFace.png";

const IntroductionSection = () => {
  return (
    <section className={`${style.container} relative`}>
      <div className="h-[750px] w-full flex flex-col items-center justify-center">
        <div>
          <div className="h-auto w-full flex justify-center mb-4">
            <div className="border-2 border-principal-color p-2 rounded-full shadow-2xl">
              <Image
                src={EmojiFace}
                alt="emojiFace"
                quality={80}
                height={300}
              />
            </div>
          </div>
          <h1 className="font-semibold text-7xl mt-10">Michael Posada</h1>
          <h1 className="font-semibold text-7xl mt-2 ">Full Stack Delevoper</h1>
          <div className="h-auto w-full flex justify-center"></div>
        </div>

        <button className="mt-10 p-2 bg-principal-color border-white rounded-lg text-white border-2 shadow-lg w-36 font-bold">
          Projects
        </button>
      </div>

      <div className="h-auto w-full flex justify-center ">
        <div className="border-2 border-white bg-principal-color p-2 rounded-full shadow-md cursor-pointer">
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

      <div className={`spacer firstLayer absolute bottom-0`}></div>
    </section>
  );
};

export default IntroductionSection;
