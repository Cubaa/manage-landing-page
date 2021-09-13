import React from "react";
import styled from "styled-components";

const Illustration = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 600px;
    min-width: 400px;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 880px) {
    width: 100%;
    img {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const IntroSectionIllustration: React.FC = () => {
  return (
    <Illustration>
      <img src="images/illustration-intro.svg" alt="illustration-intro" />
    </Illustration>
  );
};
