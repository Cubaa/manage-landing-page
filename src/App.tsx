import React, { useRef, useEffect, useState } from "react";
import { BottomBanner } from "./components/BottomBanner/BottomBanner";
import { DifferentAboutManageSection } from "./components/DifferentAboutManageSection/DifferentAboutManageSection";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./components/Intro/Intro";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import { Navbar } from "./components/Navbar/Navbar";
import { SliderContainer } from "./components/Slider/SliderContainer";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles";
import styled from "styled-components";

const MainContainer = styled.div`
  margin: 0 auto;
  @media (min-width: 1921px) {
    width: 1920px;
  }
`;

function App() {
  const nav = useRef<any>();
  const [navHeight, setNavHeight] = useState<number | undefined>();
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);
  const [widthDimensions, setWidthDimensions] = useState<number>(
    window.innerWidth
  );
  useEffect(() => {
    setNavHeight(nav.current.clientHeight);

    return () => {};
  }, [nav]);

  useEffect(() => {
    if (widthDimensions > 880) setIsMobileMenu(false);
    const windowWidthHandler = () => {
      setWidthDimensions(window.innerWidth);
    };

    window.addEventListener("resize", windowWidthHandler);

    return () => {};
  }, [widthDimensions]);

  const hamburgerMenuHandle = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  const closeMobileMenu = () => {
    setIsMobileMenu(false);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <MainContainer>
        <Navbar nav={nav} hamburgerMenuHandle={hamburgerMenuHandle} />
        <Intro navHeight={navHeight} />
        <DifferentAboutManageSection />
        <SliderContainer />
        <BottomBanner />
        <Footer />
        {isMobileMenu ? (
          <MobileMenu
            hamburgerMenuHandle={hamburgerMenuHandle}
            closeMobileMenu={closeMobileMenu}
          />
        ) : null}
      </MainContainer>
    </div>
  );
}

export default App;
