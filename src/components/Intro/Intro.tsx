import React from "react";
import styled from "styled-components";
import { IntroSectionIllustration } from "./IntroSectionIllustration/IntroSectionIllustration";
import { IntroSectionInfo } from "./IntroSectionInfo/IntroSectionInfo";

interface IIntro {
  navHeight: number | undefined;
}

const IntroSection = styled.section<IIntro>`
  width: 100%;
  min-height: 100vh;
  padding: 0 5rem;
  padding-top: ${(props) => props.navHeight}px;
  display: flex;
  background-position: center;
  background-size: contain;
  align-items: center;
  justify-content: center;
`;

export const Intro: React.FC<IIntro> = (props) => {
  console.log(props.navHeight);
  return (
    <>
      <IntroSection navHeight={props.navHeight}>
        <IntroSectionInfo />
        <IntroSectionIllustration />
      </IntroSection>
    </>
  );
};
