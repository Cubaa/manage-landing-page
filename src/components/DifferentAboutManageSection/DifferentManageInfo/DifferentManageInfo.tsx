import React from "react";
import styled from "styled-components";

const ManageInfo = styled.div`
  display: flex;
  padding: 4rem 2rem;
  width: 50%;
  align-items: flex-start;
  @media (max-width: 835px) {
    width: 100%;
    justify-content: center;
    padding: 4rem 0rem 2rem 0rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h2 {
    margin-bottom: 20px;
    color: hsl(228, 39%, 23%);
    font-size: clamp(2rem, 2vw, 2.4rem);
  }
  p {
    max-width: 350px;
    color: hsl(227, 12%, 61%);
    font-size: clamp(1rem, 2vw, 1rem);
  }
  @media (max-width: 835px) {
    width: 100%;
    align-items: center;

    h2 {
      text-align: center;
      width: 100%;
    }
    p {
      max-width: 80%;
      text-align: center;
    }
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
