import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wrapper } from "./Styles";

export const ClientList = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <Wrapper data-aos="fade-up">
      <Slider {...settings}>
        <div>
          <img src="/client-1.png" width={160} height={80} />
        </div>
        <div>
          <img src="/client-2.png" width={160} height={80} />
        </div>
        <div>
          <img src="/client-3.png" width={160} height={80} />
        </div>
        <div>
          <img src="/client-4.png" width={160} height={80} />
        </div>
        <div>
          <img src="/client-5.png" width={160} height={80} />
        </div>
        <div>
          <img src="/client-6.png" width={160} height={80} />
        </div>
        <div>
          <img src="/client-7.png" width={160} height={80} />
        </div>
        <div>
          <img src="/client-8.png" width={160} height={80} />
        </div>
        <div>
          <img src="/client-9.png" width={160} height={80} />
        </div>
        <div>
          <img src="/client-10.png" width={160} height={80} />
        </div>
      </Slider>
    </Wrapper>
  );
};
