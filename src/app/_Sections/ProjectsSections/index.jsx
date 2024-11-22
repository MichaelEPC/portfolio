import style from "./style.module.css";
import adminProjectPht from "../../public/AdminBoard.png";
import ProjectCards from "./_Components/ProjectCards";
import weatherClimateProjectPht from "../../public/weatherAppScreenshot.png";
import ecomerceProjectPht from "../../public/EcommerceScreen.png";

const projects = [
  {
    id: 1,
    name: "Admin Dashboard",
    img: adminProjectPht,
    desc: `Task manager using Next.js and TailwindCSS, where users can manage tasks for other users, report gains and losses, and generate detailed reports. This project enables efficient task management and tracking of financial outcomes, all within a modern, responsive 
    interface, thanks to TailwindCSS for design and Next.js for optimization and dynamic routing.`,
    tags: ["Next", "Tailwind"],
  },
  {
    id: 2,
    name: "Weather App",
    img: weatherClimateProjectPht,
    desc: `Weather application featuring a search bar where users can enter the name of a city to retrieve real-time weather data. The app displays key information such as temperature, humidity, and forecasts, and updates instantly as the user types in the city name. The interface is clean and responsive, making it 
    easy for users to check the weather of any city they wish in just a few clicks.`,
    tags: ["React", "Tailwind"],
  },
  {
    id: 3,
    name: "Ecommerce",
    img: ecomerceProjectPht,
    desc: `E-commerce platform where users can browse products, add them to a shopping cart, and complete purchases. The app also allows users to create accounts, log in, and view their purchase history. With a seamless and secure checkout process, it offers a user-friendly interface for managing 
    orders, tracking purchases, and enjoying a personalized shopping experience.`,
    tags: ["React", "Tailwind"],
  },
];

const ProjectSection = () => {
  return (
    <section className={`${style.container}  relative flex justify-center`}>
      <div className={`flex flex-col items-center h-auto w-full`}>
        <h1 className="font-semibold text-7xl">Projects</h1>
        <div
          className={`${style.diagonal} h-auto w-full grid gap-16 grid-cols-3 justify-center mt-20 px-56`}
        >
          {projects.map((project) => {
            return (
              <ProjectCards
                key={project.id}
                name={project.name}
                img={project.img}
                description={project.desc}
                tags={project.tags}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
