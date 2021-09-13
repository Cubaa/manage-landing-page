import React from "react";
import styled from "styled-components";
import { DifferentManageInfo } from "./DifferentManageInfo/DifferentManageInfo";
import { DifferentManagePanel } from "./DifferentManagePanel/DifferentManagePanel";

const DifferentAboutManage = styled.section`
  display: flex;
  @media (max-width: 835px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DifferentAboutManageSection: React.FC = () => {
  return (
    <>
      <DifferentAboutManage id="section2">
        <DifferentManageInfo />
        <DifferentManagePanel />
      </DifferentAboutManage>
    </>
  );
};
