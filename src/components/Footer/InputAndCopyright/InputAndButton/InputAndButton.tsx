import React from "react";
import styled from "styled-components";
import { Button } from "../../../Button/Button";

const InputAndButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputAndButtonContainer = styled.div`
  display: flex;
  align-items: stretch;
  input {
    width: 100%;
    border: none;
    outline: none;
    border-radius: 20px;
    padding-left: 10px;
    margin-right: 10px;
  }
`;

export const InputAndButton: React.FC = () => {
  return (
    <>
      <InputAndButtonWrapper>
        <InputAndButtonContainer>
          <input type="text" placeholder="Update in your inbox..." />
          <Button size="small">Go</Button>
        </InputAndButtonContainer>
      </InputAndButtonWrapper>
    </>
  );
};
