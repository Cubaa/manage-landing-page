import React from "react";
import styled from "styled-components";
import { differentManagePAnelData } from "../../../data/differentManagePanelData";
import { SingleManagePanelElement } from "./SingleManagePanelElement/SingleManagePanelElement";
const ManagePanel = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  padding-top: 4rem;
  padding-right: 5rem;
`;

export const DifferentManagePanel: React.FC = () => {
  return (
    <>
      <ManagePanel>
        {differentManagePAnelData.map((data, index) => {
          return (
            <SingleManagePanelElement
              key={index}
              title={data.title}
              content={data.content}
              index={index}
            />
          );
        })}
      </ManagePanel>
    </>
  );
};
