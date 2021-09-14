import React from "react";
import styled from "styled-components";
import { IntroSectionIllustration } from "./IntroSectionIllustration/IntroSectionIllustration";
import { IntroSectionInfo } from "./IntroSectionInfo/IntroSectionInfo";

interface IIntro {
  navHeight: number | undefined;
}

const IntroSection = styled.section<IIntro>`
  width: 100%;
  height: auto;
  padding: 1rem 5rem;
  display: flex;
  background-position: center;
  background-size: contain;
  align-items: center;
  justify-content: center;

  @media (max-width: 880px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 0 0;
    padding-top: ${(props) => props.navHeight}px;
  }
`;

export const Intro: React.FC<IIntro> = (props) => {
  return (
    <>
      <IntroSection navHeight={props.navHeight} id="section1">
        <IntroSectionInfo />
        <IntroSectionIllustration />
      </IntroSection>
    </>
  );
};
