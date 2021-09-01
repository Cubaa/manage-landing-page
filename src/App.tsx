import React, { useRef, useEffect, useState } from "react";
import { BottomBanner } from "./components/BottomBanner/BottomBanner";
import { DifferentAboutManageSection } from "./components/DifferentAboutManageSection/DifferentAboutManageSection";
import { Intro } from "./components/Intro/Intro";
import { Navbar } from "./components/Navbar/Navbar";
import { SliderContainer } from "./components/Slider/SliderContainer";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles";

function App() {
  const nav = useRef<any>();
  const [navHeight, setNavHeight] = useState<number | undefined>();

  useEffect(() => {
    setNavHeight(nav.current.clientHeight);
  }, [nav]);
  console.log(navHeight);

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar nav={nav} />
      <Intro navHeight={navHeight} />
      <DifferentAboutManageSection />
      <SliderContainer />
      <BottomBanner />
    </div>
  );
}

export default App;
