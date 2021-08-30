import React, { useRef, useEffect, useState } from "react";
import { DifferentAboutManageSection } from "./components/DifferentAboutManageSection/DifferentAboutManageSection";
import { Intro } from "./components/Intro/Intro";
import { Navbar } from "./components/Navbar/Navbar";
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
    </div>
  );
}

export default App;
