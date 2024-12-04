import ExperienceItems from "../../_Sections/AboutSection/_Components/ExperienceItems";
import style from "./style.module.css";
import cop16Pht from "../../public/COP16LOGO.png";
import plaPht from "../../public/platLogo.png";
import antonioJosePht from "../../public/AntonioJoseLogo.jpg";
import senaPht from "../../public/Sena_Colombia_logo.png";

const experienceListItems = [
  {
    id: 1,
    name: "Junior Audiovisual Technician - Translator",
    tagName: "Event",
    time: "14 Oct 2024 - 3 Nov 2024",
    description: `I start working as instructor of translation devices speaking most of
          the time english, later i got promoted to the Junior Audivisual
          Technician job where iven in charge of all visual things and making
          sure all the microphones and sound were working right.`,
    img: cop16Pht,
  },
  {
    id: 2,
    name: "Frotend Developer career",
    tagName: "Studies",
    time: "23 Jan 2023 - 24 Jan 2024",
    description: `I started my Full Stack journey by mastering JavaScript to +create dynamic features, then advanced to React to build reusable components and manage state. Finally, I transitioned to Next.js, leveraging its server-side rendering and routing capabilities to create fast, scalable applications. `,
    img: plaPht,
  },
  {
    id: 3,
    name: "Systems engineering - 5th semester ",
    tagName: "Studies",
    time: "22 Aug 2022 - Present",
    description: `Im studying in the university Antonio Jose Camacho located in Cali Colombia. In my university path i learned how to design systems more specifically 
    software systems, how to create them from scratch, maintain, model and getting requires of them.`,
    img: antonioJosePht,
  },
  {
    id: 4,
    name: "Technician of Software Programming",
    tagName: "Studies",
    time: "14 Aug 2020 - 6 Jul 2022",
    description: `Have study on the public institution named SENA in colombia, focus on Java which has allowed me to build skills in designing and 
    creating robust, scalable applications. Through learning Java, I have gained expertise in working with data structures, algorithms, and object-oriented programming.`,
    img: senaPht,
  },
];

const AboutMeSection = () => {
  return (
    <section
      className={`${style.mainContainer} ${style.titleAnimation} mb-4 flex flex-col items-center`}
    >
      <h2 className="text mt-4 text-center text-5xl font-semibold mb:text-6xl">
        Experience and Education
      </h2>

      <ol className="relative mt-10 border-0 border-slate-500 mb:border-l">
        {experienceListItems.map((item) => {
          return (
            <ExperienceItems
              key={item.id}
              name={item.name}
              time={item.time}
              tagName={item.tagName}
              description={item.description}
              img={item.img}
            />
          );
        })}
      </ol>
    </section>
  );
};

export default AboutMeSection;
