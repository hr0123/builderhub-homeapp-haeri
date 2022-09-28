import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { StyledImage } from "./Styles";

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
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "2",
        borderRadius: "40px",
      }}
    >
      <Slider {...settings}>
        <div>
          <img
            src="/Hero01.png"
            width="100%"
            height="100%"
            style={{ borderRadius: "40px" }}
          />{" "}
        </div>
        <div>
          <img
            src="/Hero02.png"
            width="100%"
            height="100%"
            style={{ borderRadius: "40px" }}
          />{" "}
        </div>
        <div>
          <img
            src="/Hero03.png"
            width="100%"
            height="100%"
            style={{ borderRadius: "40px" }}
          />{" "}
        </div>
      </Slider>
    </div>
  );
};
