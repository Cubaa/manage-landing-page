import React from "react";
import styled from "styled-components";
import { footerLinks } from "../../../data/footerLinks";

const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  @media (max-width: 845px) {
    width: 100%;
    margin: 40px 0;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const LinksWrapper = styled.div`
  width: calc(50% - 20px);
  display: flex;
  margin-bottom: 12px;
  margin-right: 20px;
  a {
    text-decoration: none;
    font-size: 12px;
    color: #fff;
    transition: 0.1s linear;
    &:hover {
      color: hsl(12, 88%, 59%);
    }
  }
  @media (max-width: 845px) {
    a {
      width: 100%;
      text-align: center;
    }
  }
`;

export const FooterLinks: React.FC = () => {
  return (
    <>
      <FooterLinksWrapper>
        <LinksContainer>
          {footerLinks.map((link, index) => {
            return (
              <LinksWrapper key={index}>
                <a href="#">{link.name}</a>
              </LinksWrapper>
            );
          })}
        </LinksContainer>
      </FooterLinksWrapper>
    </>
  );
};
