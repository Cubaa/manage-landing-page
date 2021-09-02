import React from "react";
import styled from "styled-components";
import { Button } from "../../Button/Button";

const IntroInfo = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 880px) {
    width: 100%;

    justify-content: center;
  }
`;

const Info = styled.div`
  max-width: 700px;
  h1 {
    max-width: 500px;
    font-size: clamp(0.5rem, 4vw, 3.5rem);
    margin: 0;
    padding: 0;
    color: hsl(233, 12%, 13%);
  }
  p {
    max-width: 400px;
    color: hsl(227, 12%, 61%);
    margin: 25px 0;
    font-size: max(1rem, 1.5vw);
  }
  @media (max-width: 880px) {
    max-width: 100%;
    h1 {
      max-width: 100%;
      text-align: center;
    }
    p {
      text-align: center;
      max-width: 100%;
    }
  }
`;

const ButtonWrapper = styled.div`
  @media (max-width: 880px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const IntroSectionInfo: React.FC = () => {
  return (
    <IntroInfo>
      <Info>
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view
        </p>
        <ButtonWrapper>
          <Button size="small">Get Started</Button>
        </ButtonWrapper>
      </Info>
    </IntroInfo>
  );
};
