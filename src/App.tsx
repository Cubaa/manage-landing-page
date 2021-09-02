import React, { useRef, useEffect, useState } from "react";
import { BackgroundLayout } from "./components/BackgroundLayout/BackgroundLayout";
import { BottomBanner } from "./components/BottomBanner/BottomBanner";
import { DifferentAboutManageSection } from "./components/DifferentAboutManageSection/DifferentAboutManageSection";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./components/Intro/Intro";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import { Navbar } from "./components/Navbar/Navbar";
import { SliderContainer } from "./components/Slider/SliderContainer";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles";

function App() {
  const nav = useRef<any>();
  const [navHeight, setNavHeight] = useState<number | undefined>();
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);
  const [widthDimensions, setWidthDimensions] = useState<number>(
    window.innerWidth
  );
  useEffect(() => {
    setNavHeight(nav.current.clientHeight);
  }, [nav]);
  console.log(navHeight);

  useEffect(() => {
    if (widthDimensions > 880) setIsMobileMenu(false);
    const windowWidthHandler = () => {
      setWidthDimensions(window.innerWidth);
    };

    console.log(widthDimensions);
    window.addEventListener("resize", windowWidthHandler);
  });
  console.log(isMobileMenu);
  const hamburgerMenuHandle = () => {
    setIsMobileMenu(!isMobileMenu);
    console.log(isMobileMenu);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar nav={nav} hamburgerMenuHandle={hamburgerMenuHandle} />
      <Intro navHeight={navHeight} />
      <DifferentAboutManageSection />
      <SliderContainer />
      <BottomBanner />
      <Footer />
      {isMobileMenu ? (
        <MobileMenu hamburgerMenuHandle={hamburgerMenuHandle} />
      ) : null}
      {/* <BackgroundLayout /> */}
    </div>
  );
}

export default App;
