import React from "react";
import styled from "styled-components";

const BackgroundLayoutWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #2d3436;
  background-image: linear-gradient(340deg, #5e6364 0%, #f5f5f5 74%);
`;

export const BackgroundLayout: React.FC = () => {
  return (
    <>
      <BackgroundLayoutWrapper></BackgroundLayoutWrapper>
    </>
  );
};
