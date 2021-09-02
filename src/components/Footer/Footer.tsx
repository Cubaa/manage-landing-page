import React from "react";
import styled from "styled-components";
import { FooterLinks } from "./FooterLinks/FooterLinks";
import { InputAndCopyright } from "./InputAndCopyright/InputAndCopyright";
import { SocialMediaLogo } from "./SocialMediaLogo/SocialMediaLogo";

const FooterWrapper = styled.div`
  display: flex;
  padding: 2.5rem 2rem;
  background-color: hsl(233, 12%, 13%);
`;

export const Footer: React.FC = () => {
  return (
    <>
      <FooterWrapper>
        <SocialMediaLogo />
        <FooterLinks />
        <InputAndCopyright />
      </FooterWrapper>
    </>
  );
};
