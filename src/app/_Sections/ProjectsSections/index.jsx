import style from "./style.module.css";
import AdaptProjectCardsToScreen from "./_Components/AdaptToScreen";

const ProjectSection = () => {
  return (
    <section
      id="projectSection"
      className={`${style.container} relative flex justify-center`}
    >
      <div className={`${style.diagonal} h-[580px] w-full z-10`}></div>
      <div className={`flex flex-col items-center h-auto w-full`}>
        <h1 className="font-semibold text-5xl md:text-6xl z-20">Projects</h1>
        <AdaptProjectCardsToScreen />
      </div>
    </section>
  );
};

export default ProjectSection;
