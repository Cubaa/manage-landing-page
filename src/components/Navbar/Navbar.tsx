import React, { useRef } from "react";
import styled from "styled-components";
import { navMenuLinks } from "../../data/navMenuLinksData";
import { Button } from "../Button/Button";

const Nav = styled.nav`
  width: 100%;
  /* position: fixed; */
  display: flex;
  align-items: center;
  padding: 2rem 7rem 2rem 5rem;
  justify-content: space-between;
  /* z-index: 999; */
  background-color: #fff;
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    display: flex;
  }
`;
const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;
const NavMenuLink = styled.a`
  font-weight: 700;
  cursor: pointer;
  transition: 0.1s linear;
  &:hover {
    color: hsl(227, 12%, 61%);
  }
`;
const NavMenuList = styled.li`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 12px;
`;

const NavButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface INav {
  nav: any;
}

export const Navbar: React.FC<INav> = (props) => {
  return (
    <>
      <Nav ref={props.nav}>
        <NavLogo>
          <img src="../images/logo.svg" alt="logo" />
        </NavLogo>
        <NavMenu>
          {navMenuLinks.map((link, index: number) => {
            return (
              <NavMenuList key={index}>
                <NavMenuLink>{link.name}</NavMenuLink>
              </NavMenuList>
            );
          })}
        </NavMenu>
        <NavButton>
          <Button size="big">Get Started</Button>
        </NavButton>
      </Nav>
    </>
  );
};
