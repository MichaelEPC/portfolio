import HeaderContainer from "./_Components/Header";
import MainContainer from "./_Components/MainContainer";
import NavBar from "./_Components/NavBar";
import IntroductionSection from "./_Sections/Introduction/index";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <NavBar />
      </HeaderContainer>
      <MainContainer>
        <IntroductionSection />
      </MainContainer>
    </>
  );
}
