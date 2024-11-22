import TechItems from "./_Components/TechItems";
import style from "./style.module.css";
import typeScriptLogo from "../../public/Typescript_logo.png";
import nextLogo from "../../public/nextjs-icon-svgrepo-com.svg";
import reactLogo from "../../public/React-icon.png";
import tailwindLogo from "../../public/tail-logo.png";
import reduxLogo from "../../public/redux-logo.png";
import javaScriptLogo from "../../public/JavaScript-logo.png";
import cssLogo from "../../public/css-logo.png";
import htmlLogo from "../../public/html-logo.png";
import sqlLogo from "../../public/mysql-logo.png";
import javaLogo from "../../public/java-logo.png";

const listTechItems = [
  {
    id: 1,
    name: "Next.js",
    img: nextLogo,
  },
  {
    id: 2,
    name: "React",
    img: reactLogo,
  },
  {
    id: 3,
    name: "TailwindCSS",
    img: tailwindLogo,
  },
  {
    id: 4,
    name: "Redux (RTK)",
    img: reduxLogo,
  },
  {
    id: 5,
    name: "TypeScript",
    img: typeScriptLogo,
  },
  {
    id: 6,
    name: "JavaScript",
    img: javaScriptLogo,
  },
  {
    id: 7,
    name: "CSS",
    img: cssLogo,
  },
  {
    id: 8,
    name: "HTML",
    img: htmlLogo,
  },
  {
    id: 9,
    name: "MySQL",
    img: sqlLogo,
  },
  {
    id: 10,
    name: "Java",
    img: javaLogo,
  },
];

const TechStackSection = () => {
  return (
    <section className={`${style.mainContainer} flex flex-col items-center`}>
      <h3 className={`${style.titleAnimation} font-bold text-6xl`}>
        Technologies stack
      </h3>
      <div className={`grid grid-cols-5 gap-4 mt-4 ${style.titleAnimation}`}>
        {listTechItems.map((item) => {
          return <TechItems key={item.id} name={item.name} img={item.img} />;
        })}
      </div>
    </section>
  );
};

export default TechStackSection;
