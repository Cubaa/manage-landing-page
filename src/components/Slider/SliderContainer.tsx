import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "../../data/sliderData";
import { Slide } from "./Slide/Slide";

export const SliderContainer: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          {sliderData.map((item, index) => {
            return (
              <Slide key={index} name={item.name} content={item.content} />
            );
          })}
        </Slider>
      </div>
    </>
  );
};
