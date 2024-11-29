import ProjectCards from "../../../ProjectCards";
import adminProjectPht from "../../../../../../public/AdminBoard.png";
import weatherClimateProjectPht from "../../../../../../public/weatherAppScreenshot.png";
import ecomerceProjectPht from "../../../../../../public/EcommerceScreen.png";

const projects = [
  {
    id: 1,
    name: "Admin Dashboard",
    img: adminProjectPht,
    desc: `Task manager using Next.js and TailwindCSS, where users can manage tasks for other users, report gains and losses, and generate detailed reports. This project enables efficient task management and tracking of financial outcomes, all within a modern, responsive 
    interface, thanks to TailwindCSS for design and Next.js for optimization and dynamic routing.`,
    tags: [["Next", "TypeScript"], ["Tailwind"]],
    github: "",
    deploy: "https://admin-dashboard-zeta-flame.vercel.app/home",
  },
  {
    id: 2,
    name: "Weather App",
    img: weatherClimateProjectPht,
    desc: `Weather application featuring a search bar where users can enter the name of a city to retrieve real-time weather data. The app displays key information such as temperature, humidity, and forecasts, and updates instantly as the user types in the city name. The interface is clean and responsive, making it 
    easy for users to check the weather of any city they wish in just a few clicks.`,
    tags: [["React", "TypeScript", "Redux (RTK)"], ["Tailwind"]],
    github: "https://github.com/MichaelEPC/weather-app",
    deploy: "https://weather-app-six-mu-24.vercel.app/",
  },
  {
    id: 3,
    name: "Ecommerce",
    img: ecomerceProjectPht,
    desc: `E-commerce platform where users can browse products, add them to a shopping cart, and complete purchases. The app also allows users to create accounts, log in, and view their purchase history. With a seamless and secure checkout process, it offers a user-friendly interface for managing 
    orders, tracking purchases, and enjoying a personalized shopping experience.`,
    tags: [["React", "JavaScript"], ["Tailwind"]],
    github: "https://github.com/MichaelEPC/ecommerce",
    deploy: "https://ecommerce-tech-phi.vercel.app/",
  },
];

const TabletScreen = () => {
  return (
    <div className="flex flex-col items-center h-auto w-full ">
      <div
        className={`h-auto w-auto grid gap-8 grid-cols-1 md:gap-8 lg:gap-16 md:grid-cols-2 justify-center mt-10`}
      >
        {projects.map((project, i) => {
          if (projects.length === i + 1) return;
          return (
            <ProjectCards
              key={project.id}
              name={project.name}
              img={project.img}
              description={project.desc}
              tagsArray={project.tags}
              codeURL={project.github}
              deployURL={project.deploy}
            />
          );
        })}
      </div>
      <div className={`h-auto w-full flex justify-center mt-8`}>
        {projects.map((project, i) => {
          if (projects.length !== i + 1) return;
          return (
            <ProjectCards
              key={project.id}
              name={project.name}
              img={project.img}
              description={project.desc}
              tagsArray={project.tags}
              codeURL={project.github}
              deployURL={project.deploy}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TabletScreen;
