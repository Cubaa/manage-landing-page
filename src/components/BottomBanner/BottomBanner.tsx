import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";

const BottomBannerWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 5rem;
  background-color: hsl(12, 88%, 59%);
`;

const BannerInfo = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  h1 {
    color: #fff;
    font-size: clamp(2rem, 2.5vw, 3rem);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BottomBanner = () => {
  return (
    <>
      <BottomBannerWrapper>
        <BannerInfo>
          <h1>Simplify how your team works today</h1>
        </BannerInfo>
        <ButtonWrapper>
          <Button size="small" color="white">
            Get Started
          </Button>
        </ButtonWrapper>
      </BottomBannerWrapper>
    </>
  );
};
