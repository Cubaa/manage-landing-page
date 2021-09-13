import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
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
