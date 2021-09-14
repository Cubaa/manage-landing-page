import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "../../data/sliderData";
import { Slide } from "./Slide/Slide";
import styled from "styled-components";
import { Button } from "../Button/Button";
import "./SliderContainer.css";
const SliderContainerStyles = styled.section`
  width: 100%;
  padding: 1rem;
  margin-top: 100px;
  overflow-x: hidden;
  h2 {
    text-align: center;
    margin-bottom: 100px;
    color: hsl(233, 12%, 13%);
  }
  @media (max-width: 835px) {
    margin-top: 40px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 70px 0;
`;
export const SliderContainer: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 3000,
    cssEase: "linear",
    autoplay: true,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <SliderContainerStyles id="section3">
        <h2> What they've said</h2>
        <Slider {...settings}>
          {sliderData.map((item, index) => {
            return (
              <Slide
                key={index}
                image={item.image}
                name={item.name}
                content={item.content}
              />
            );
          })}
        </Slider>
        <ButtonWrapper>
          <Button size="big">Get started </Button>
        </ButtonWrapper>
      </SliderContainerStyles>
    </>
  );
};
