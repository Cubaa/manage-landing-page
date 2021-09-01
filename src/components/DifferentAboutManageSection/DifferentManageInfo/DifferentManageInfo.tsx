import React from "react";
import styled from "styled-components";

const ManageInfo = styled.div`
  display: flex;
  padding: 4rem 5rem;
  width: 50%;
  align-items: flex-start;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h2 {
    margin-bottom: 20px;
    color: hsl(228, 39%, 23%);
    font-size: clamp(0.5rem, 3vw, 2.4rem);
  }
  p {
    max-width: 350px;
    color: hsl(227, 12%, 61%);
    font-size: clamp(0.5rem, 2vw, 1rem);
  }
`;

export const DifferentManageInfo: React.FC = () => {
  return (
    <>
      <ManageInfo>
        <Info>
          <h2>What's different about Manage?</h2>
          <p>
            Manage provides all the functionallity your team needs, without the
            complexity. Our software is taller - made for modern digital
            product.
          </p>
        </Info>
      </ManageInfo>
    </>
  );
};
