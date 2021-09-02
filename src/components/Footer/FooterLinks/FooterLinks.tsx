import React from "react";
import styled from "styled-components";
import { footerLinks } from "../../../data/footerLinks";

const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
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
  }
`;

export const FooterLinks: React.FC = () => {
  return (
    <>
      <FooterLinksWrapper>
        <LinksContainer>
          {footerLinks.map((link) => {
            return (
              <LinksWrapper>
                <a href="#">{link.name}</a>
              </LinksWrapper>
            );
          })}
        </LinksContainer>
      </FooterLinksWrapper>
    </>
  );
};
