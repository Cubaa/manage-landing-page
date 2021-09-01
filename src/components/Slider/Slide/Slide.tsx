import React from "react";
import styled from "styled-components";

const SingleSlide = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 15px;
  background-color: #ebecf0;
  padding: 0.7rem 0.8rem;
  min-height: 250px;
  border-radius: 8px;
  z-index: 995;
`;
const SlideImage = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  z-index: 999;
  border: 1px solid black;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
const SlideInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    display: inline-block;
    margin: 20px 0;
    font-weight: 700;
    font-size: 15px;
  }
  p {
    font-size: 14px;
    text-align: center;
    color: hsl(227, 12%, 61%);
  }
`;

interface ISlide {
  name: string;
  content: string;
  image: string;
}

export const Slide: React.FC<ISlide> = ({ name, content, image }) => {
  return (
    <>
      <SingleSlide>
        <SlideImage>
          <img src={image} alt="image" />
        </SlideImage>
        <SlideInfo>
          <span>{name}</span>
          <p>{content}</p>
        </SlideInfo>
      </SingleSlide>
    </>
  );
};
