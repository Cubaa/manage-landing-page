import React from "react";
import styled from "styled-components";
import { Copyright } from "./Copyright/Copyright";
import { InputAndButton } from "./InputAndButton/InputAndButton";

const InputAndCopyrightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputAndCopyright: React.FC = () => {
  return (
    <>
      <InputAndCopyrightWrapper>
        <InputAndButton />
        <Copyright />
      </InputAndCopyrightWrapper>
    </>
  );
};
