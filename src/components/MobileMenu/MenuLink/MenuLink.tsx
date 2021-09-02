import React from "react";
import styled from "styled-components";

const SingleLink = styled.a``;

interface IMenuLink {
  name: string;
}

export const MenuLink: React.FC<IMenuLink> = ({ name }) => {
  return (
    <>
      <SingleLink>{name}</SingleLink>
    </>
  );
};
