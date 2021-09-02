import React from "react";
import styled from "styled-components";

const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 12px;
    color: hsl(227, 12%, 61%);
  }
  @media (max-width: 845px) {
    margin-top: 20px;
  }
`;

export const Copyright: React.FC = () => {
  return (
    <>
      <CopyrightWrapper>
        <p>Copyright 2020. All Rights Reserved</p>
      </CopyrightWrapper>
    </>
  );
};
