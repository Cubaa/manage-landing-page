import React, { useRef } from "react";
import styled from "styled-components";
import { navMenuLinks } from "../../data/navMenuLinksData";
import { Button } from "../Button/Button";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = styled.nav`
  width: 100%;
  /* position: fixed; */
  display: flex;
  align-items: center;
  padding: 2rem 7rem 2rem 5rem;
  justify-content: space-between;
  /* z-index: 999; */
  background-color: #fff;
  @media (max-width: 880px) {
    padding: 2rem 2rem;
    position: fixed;
    z-index: 999;
  }
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
  @media (max-width: 880px) {
    display: none;
  }
`;
const NavMenuLink = styled(Link)`
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
  @media (max-width: 880px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 880px) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

interface INav {
  nav: any;
  hamburgerMenuHandle: () => void;
}

export const Navbar: React.FC<INav> = ({ nav, hamburgerMenuHandle }) => {
  return (
    <>
      <Nav ref={nav}>
        <NavLogo>
          <img src="images/logo.svg" alt="logo" />
        </NavLogo>
        <NavMenu>
          {navMenuLinks.map((link, index: number) => {
            return (
              <NavMenuList key={index}>
                <NavMenuLink
                  to={"section" + ++index}
                  smooth={true}
                  duration={1000}
                  spy={true}
                >
                  {link.name}
                </NavMenuLink>
              </NavMenuList>
            );
          })}
        </NavMenu>
        <NavButton>
          <Button size="big">Get Started</Button>
        </NavButton>
        <HamburgerMenu>
          <img
            src="images/icon-hamburger.svg"
            alt="icon-hamburger"
            onClick={hamburgerMenuHandle}
          />
        </HamburgerMenu>
      </Nav>
    </>
  );
};
