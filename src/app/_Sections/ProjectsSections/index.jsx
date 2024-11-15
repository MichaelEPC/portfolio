import style from "./style.module.css";
import adminProjectPht from "../../public/AdminBoard.png";
import ProjectCards from "./_Components/ProjectCards";
import weatherClimateProjectPht from "../../public/weatherAppScreenshot.png";
import ecomerceProjectPht from "../../public/EcommerceScreen.png";

const img = adminProjectPht;
const projects = [
  {
    id: 1,
    name: "Admin Dashboard",
    img: adminProjectPht,
    desc: "adawodakowdkoa",
  },
  {
    id: 2,
    name: "Weather App",
    img: weatherClimateProjectPht,
    desc: "adawodakowdkoa",
  },
  {
    id: 3,
    name: "Ecommerce",
    img: ecomerceProjectPht,
    desc: "adawodakwdo",
  },
];

const ProjectSection = () => {
  return (
    <section className={`${style.container} relative flex justify-center`}>
      <div className="spacer secondLayer absolute top-0 z-20"></div>
      <div className="z-50 absolute top-48 flex flex-col items-center  ">
        <h1 className="font-semibold text-7xl">Projects</h1>
        <div className="grid gap-16 grid-cols-3 justify-center mt-14 px-56 border-x-2 border-slate-600">
          {projects.map((project) => {
            return (
              <ProjectCards
                key={project.id}
                name={project.name}
                img={project.img}
                description={project.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
