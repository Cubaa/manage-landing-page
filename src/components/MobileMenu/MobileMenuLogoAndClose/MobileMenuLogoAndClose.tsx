import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MobileMenuLogoAndCloseWrapper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;
const CloseIcon = styled.div`
  cursor: pointer;
`;

interface IMobileMenu {
  hamburgerMenuHandle: () => void;
}

export const MobileMenuLogoAndClose: React.FC<IMobileMenu> = ({
  hamburgerMenuHandle,
}) => {
  return (
    <>
      <MobileMenuLogoAndCloseWrapper>
        <Logo>
          <img src="images/logo.svg" alt="logo" />
        </Logo>
        <CloseIcon onClick={hamburgerMenuHandle}>
          <img src="images/icon-close.svg" alt="icon-close" />
        </CloseIcon>
      </MobileMenuLogoAndCloseWrapper>
    </>
  );
};
