import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselWrapper, StyledImage } from "./Styles";

export const HeroCarousel = () => {
  const settings = {
    // dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        <StyledImage src={"/Hero01.png"} alt={""} width={1160} height={540} />
        <StyledImage src={"/Hero02.png"} alt={""} width={1160} height={540} />
        <StyledImage src={"/Hero03.png"} alt={""} width={1160} height={540} />
      </Slider>
    </CarouselWrapper>
  );
};
