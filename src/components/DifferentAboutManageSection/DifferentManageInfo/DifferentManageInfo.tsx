import React from "react";
import styled from "styled-components";

const ManageInfo = styled.div`
  width: 50%;
`;

export const DifferentManageInfo: React.FC = () => {
  return (
    <>
      <ManageInfo>
        <h2>What's different about Manage?</h2>
        <p>
          Manage provides all the functionallity your team needs, without the
          complexity. Our software is taller - made for modern digital product.
        </p>
      </ManageInfo>
    </>
  );
};
