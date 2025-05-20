import ProjectCards from "../../../ProjectCards";
import adminProjectPht from "../../../../../../public/AdminBoard.png";
import weatherClimateProjectPht from "../../../../../../public/weatherAppScreenshot.png";
import ecomerceProjectPht from "../../../../../../public/EcommerceScreen.png";

const projects = [
  {
    id: 1,
    name: "Financial Dashboard Project",
    img: adminProjectPht,
    desc: `A financial dashboard web application that allows users to input income and cash outflows, track the number of investments, profits, and net gain. It also displays products sold by the company, revenue and number of sales per product, and monthly expenses. Designed for clear visualization and real-time business insights.`,
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
    deploy: "https://ecommerce-two-gamma-62.vercel.app/",
  },
];

const PCScreen = () => {
  return (
    <div
      className={`mt-14 grid h-auto w-full grid-cols-3 justify-center gap-16 md:px-56`}
    >
      {projects.map((project) => {
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
  );
};

export default PCScreen;
