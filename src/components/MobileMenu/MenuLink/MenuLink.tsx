import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
const SingleLink = styled(Link)`
  cursor: pointer;
`;

interface IMenuLink {
  name: string;
  index: number;
  closeMobileMenu: () => void;
}

export const MenuLink: React.FC<IMenuLink> = ({
  name,
  index,
  closeMobileMenu,
}) => {
  return (
    <>
      <SingleLink
        to={"section" + ++index}
        smooth={true}
        duration={1000}
        spy={true}
        onClick={closeMobileMenu}
      >
        {name}
      </SingleLink>
    </>
  );
};
