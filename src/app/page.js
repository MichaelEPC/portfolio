import HeaderContainer from "./_Components/Header";
import MainContainer from "./_Components/MainContainer";
import NavBar from "./_Components/NavBar";
import IntroductionSection from "./_Sections/Introduction/index";
import ProjectSection from "./_Sections/ProjectsSections";
import DivisionSection from "./_Components/DivisionCurve";
import AboutMeSection from "./_Sections/AboutSection";
import ContactMeSection from "./_Sections/ContactMeSection";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <NavBar />
      </HeaderContainer>
      <MainContainer>
        <IntroductionSection />
        <DivisionSection></DivisionSection>
        <ProjectSection />
        <AboutMeSection />
        <ContactMeSection />
      </MainContainer>
    </>
  );
}
