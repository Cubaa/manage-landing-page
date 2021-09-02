import React from "react";
import styled from "styled-components";

import { Icon } from "./Icon/Icon";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./icon.css";

const SocialMediaLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 20%;
  margin-right: 40px;
  @media (max-width: 845px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;
const Logo = styled.div`
  img {
    width: 85%;
    height: auto;
    object-fit: cover;
  }
  @media (max-width: 845px) {
    img {
      width: 100%;
    }
  }
`;
const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  svg {
    margin-right: 15px;
    transition: 0.1s linear;
    &:hover {
      fill: hsl(12, 88%, 59%);
    }
  }
  @media (max-width: 845px) {
    margin-top: 0px;
  }
`;
export const SocialMediaLogo: React.FC = () => {
  return (
    <>
      <SocialMediaLogoWrapper>
        <Logo>
          <img src="../images/logo.svg" alt="logo" className="icon" />
        </Logo>
        <SocialMediaLinks>
          <AiFillFacebook
            style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
          />
          <AiFillYoutube
            style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
          />
          <AiOutlineTwitter
            style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
          />
          <FaPinterest
            style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
          />
          <AiFillInstagram
            style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
          />
        </SocialMediaLinks>
      </SocialMediaLogoWrapper>
    </>
  );
};
