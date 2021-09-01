import React from "react";
import styled from "styled-components";

const SingleManageElementWrapper = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const SingleElementNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  height: 40px;
  padding: 0.1rem 1.5rem;
  background-color: hsl(12, 88%, 59%);
  color: #fff;
  font-size: 14px;
  margin-right: 30px;
`;
const SingleElementContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  p:nth-of-type(1) {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: clamp(0.5rem, 3vw, 1rem);
  }
  p:nth-of-type(2) {
    color: hsl(227, 12%, 61%);
    font-size: clamp(0.5rem, 3vw, 0.9rem);
  }
`;

interface IManagePanelData {
  title: string;
  content: string;
  index: number;
}

export const SingleManagePanelElement: React.FC<IManagePanelData> = ({
  title,
  content,
  index,
}) => {
  return (
    <>
      <SingleManageElementWrapper>
        <SingleElementNumber>
          <span>{"0" + ++index}</span>
        </SingleElementNumber>
        <SingleElementContent>
          <p>{title}</p>
          <p>{content}</p>
        </SingleElementContent>
      </SingleManageElementWrapper>
    </>
  );
};
