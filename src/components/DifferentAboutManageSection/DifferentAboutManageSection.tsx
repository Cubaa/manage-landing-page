import React from "react";
import styled from "styled-components";
import { DifferentManageInfo } from "./DifferentManageInfo/DifferentManageInfo";
import { DifferentManagePanel } from "./DifferentManagePanel/DifferentManagePanel";

const DifferentAboutManage = styled.section`
  display: flex;
`;

export const DifferentAboutManageSection: React.FC = () => {
  return (
    <>
      <DifferentAboutManage>
        <DifferentManageInfo />
        <DifferentManagePanel />
      </DifferentAboutManage>
    </>
  );
};
