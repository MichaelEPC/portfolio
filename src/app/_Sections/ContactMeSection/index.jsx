import Link from "next/link";
import ClipBoardButton from "./_Components/ClipboardButton";
import style from "./style.module.css";

const ContactMeSection = () => {
  return (
    <section
      className={`${style.mainContainer} border-t-4  border-principal-color flex flex-col items-center`}
    >
      <h2 className="font-semibold text-6xl mt-4">Contact</h2>
      <div className="h-full w-full flex justify-center flex-col items-center">
        <h3 className="font-semibold text-3xl text-slate-600">
          ¿Want to work with me?{" "}
          <span className="text-principal-color">¡contact me!</span>
        </h3>
        <div className="flex items-center justify-between h-auto w-96">
          <Link
            href={"https://mail.google.com/mail/u/0/?pli=1#inbox"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cursor-pointer flex justify-center items-center border-2 border-principal-color rounded-lg">
              <svg
                className="fill-text-color"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
              >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
              </svg>
            </div>
          </Link>
          <div className="flex items-center">
            <div className="flex items-center p-2 mt-2 border-2 border-principal-color rounded-full">
              <svg
                className="fill-text-color"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
              </svg>
              <p
                className="ml-1 font-semibold text-principal-color
              "
              >
                michaelposadadev@gmail.com
              </p>
            </div>
            <ClipBoardButton clipBoard={"michaelposadadev@gmail.com"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;
