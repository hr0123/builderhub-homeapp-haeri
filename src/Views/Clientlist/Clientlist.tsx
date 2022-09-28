import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wrapper } from "./Styles";
import Image from "next/image";

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
          <Image src="/client-1.png" alt="client" width={160} height={80} />
        </div>
        <div>
          <Image src="/client-2.png" alt="client" width={160} height={80} />
        </div>
        <div>
          <Image src="/client-3.png" alt="client" width={160} height={80} />
        </div>
        <div>
          <Image src="/client-4.png" alt="client" width={160} height={80} />
        </div>
        <div>
          <Image src="/client-5.png" alt="client" width={160} height={80} />
        </div>
        <div>
          <Image src="/client-6.png" alt="client" width={160} height={80} />
        </div>
        <div>
          <Image src="/client-7.png" alt="client" width={160} height={80} />
        </div>
        <div>
          <Image src="/client-8.png" alt="client" width={160} height={80} />
        </div>
        <div>
          <Image src="/client-9.png" alt="client" width={160} height={80} />
        </div>
        <div>
          <Image src="/client-10.png" alt="client" width={160} height={80} />
        </div>
      </Slider>
    </Wrapper>
  );
};
