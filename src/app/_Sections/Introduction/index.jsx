import EmailButton from "./_Components/ClipBoardButton";
import GoDownButton from "./_Components/GoDownButton";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css";
import profilePht from "../../public/Profilepht.png";
import DownloadCV from "../../_Components/Dialog";

const IntroductionSection = () => {
  return (
    <section className={`${style.container} relative mb-44`}>
      <div className="z-50 flex h-[750px] w-full flex-col-reverse items-center justify-center lg:flex-row">
        <div className={`${style.titleIntro} px-2`}>
          <h1 className={`mt-10 text-5xl font-semibold text-principal-color`}>
            <span className="text-text-color"></span>Michael Posada Castañeda{" "}
          </h1>
          <h1 className="mt-2 text-4xl font-semibold text-text-color">
            Frontend <span className="text-text-color">Developer</span> Junior
          </h1>
          <div className="mt-2 border-t-2 border-principal-color">
            <p className="mt-1 h-auto w-auto text-lg text-text-color presm:w-[400px] premd:w-[700px]">
              {`I'm a junior passionate about creating dynamic and engaging
              software web. I have a solid background in frameworks and
              technologies such as JavaScript, React and NextJS.`}
            </p>
          </div>
          <div className="mt-1 flex h-auto w-full flex-col items-center mb:flex-row">
            <div className="mb-4 flex items-center mb:mb-0">
              <Link
                href={
                  "https://www.linkedin.com/in/michael-posada-casta%C3%B1eda-36a57b316/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="cursor-pointer rounded-full border-2 border-slate-400 bg-slate-500 p-1">
                  <svg
                    className="fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="4.983" cy="5.009" r="2.188"></circle>
                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                  </svg>
                </div>
              </Link>

              <Link
                href={"https://github.com/MichaelEPC?tab=repositories"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ml-2 cursor-pointer rounded-full border-2 border-slate-400 bg-slate-500 p-1">
                  <svg
                    className="fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                  </svg>
                </div>
              </Link>

              <EmailButton />
            </div>
            <DownloadCV />
          </div>
        </div>
        <div className="mt-32 rounded-full border-2 border-principal-color bg-gray-200 p-5 presm:top-4 presm:mt-14 lg:mt-0">
          <Image src={profilePht} alt="profilePht" className="h-auto w-44" />
        </div>
      </div>

      <GoDownButton />

      <div className={`${style.box}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default IntroductionSection;
