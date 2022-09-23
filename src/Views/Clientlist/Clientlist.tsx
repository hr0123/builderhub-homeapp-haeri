import { Wrapper } from "./Styles";
// import Carousel from "react-bootstrap/Carousel";
import React, { Component } from "react";
import Slider from "react-slick";

export const ClientList = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    // <div
    //   style={{
    //     width: "100%",
    //     backgroundColor: "#F7F6FB",
    //     display: "flex",
    //     flexDirection: "row",
    //   }}
    // >
    //   {<Carousel
    //     style={{ width: "100vw" }}
    //     fade
    //     controls={false}
    //     indicators={false}
    //     interval={2000}
    //   >
    //    <Wrapper>
    <div style={{ width: "100vw", display: "flex", flexDirection: "row" }}>
      <Slider {...settings}>
        <div>
          <img src="/client-1.png" />
        </div>
        <div>
          <img src="/client-2.png" />
        </div>
        <div>
          <img src="/client-3.png" />
        </div>
        <div>
          <img src="/client-4.png" />
        </div>
        <div>
          <img src="/client-5.png" />
        </div>
        <div>
          <img src="/client-6.png" />
        </div>
        <div>
          <img src="/client-7.png" />
        </div>
        <div>
          <img src="/client-8.png" />
        </div>
        <div>
          <img src="/client-9.png" />
        </div>
        <div>
          <img src="/client-10.png" />
        </div>
        {/* </Wrapper> */}
        {/* </Carousel> */}
      </Slider>
    </div>
  );
};
