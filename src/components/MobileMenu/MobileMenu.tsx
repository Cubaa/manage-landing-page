import React from "react";
import styled from "styled-components";
import { navMenuLinks } from "../../data/navMenuLinksData";
import { MenuLink } from "./MenuLink/MenuLink";
import { MobileMenuLogoAndClose } from "./MobileMenuLogoAndClose/MobileMenuLogoAndClose";

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100vh;
  background-color: #2d3436;
  background-image: linear-gradient(340deg, #5e6364 0%, #f5f5f5 74%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  @media (min-width: 881px) {
    display: none;
  }
`;

const Menu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const MenuContainer = styled.div`
  width: 85%;
  height: 300px;
  display: flex;
  background-color: #fff;
  margin-top: 80px;
`;
const MenuList = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
`;

interface IMobileMenu {
  hamburgerMenuHandle: () => void;
  closeMobileMenu: () => void;
}

export const MobileMenu: React.FC<IMobileMenu> = ({
  hamburgerMenuHandle,
  closeMobileMenu,
}) => {
  return (
    <>
      <MobileMenuWrapper>
        <MobileMenuLogoAndClose hamburgerMenuHandle={hamburgerMenuHandle} />
        <MenuContainer>
          <Menu>
            {navMenuLinks.map((link, index) => {
              return (
                <MenuList key={index}>
                  <MenuLink
                    name={link.name}
                    index={index}
                    closeMobileMenu={closeMobileMenu}
                  />{" "}
                </MenuList>
              );
            })}
          </Menu>
        </MenuContainer>
      </MobileMenuWrapper>
    </>
  );
};
