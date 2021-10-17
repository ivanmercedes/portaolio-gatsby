import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import bootstrap from "../images/tech/bootstrap.svg";
import nodejs from "../images/tech/nodejs.svg";
import react from "../images/tech/react.svg";
import js from "../images/tech/js.svg";
import mongodb from "../images/tech/mongodb.svg";
import php from "../images/tech/php.svg";
// Import Swiper styles
import "swiper/css";
import styled from "styled-components";
import img from "../images/side-element.svg";

const SliderSection = styled.section`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-color: #212121;
  padding: 5rem 0 5rem 0;
  position: relative;
  @media (max-width: 768px) {
    background-image: unset;

    .wrapper {
      display: none;
    }
  }
`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 2.8rem;
  position: relative;
  margin-bottom: 1.5rem;
  padding-bottom: 0.4rem;

  &:before {
    content: "";
    position: absolute;
    width: 100px;
    height: 3px;
    background-color: #66d9ef;
    bottom: -4px;
  }
`;
const Slider = () => {
  return (
    <SliderSection className="mt-4">
      <div className="container">
        <Title className="text-center mb-5">Tecnologías que manejo</Title>
        <Swiper
          spaceBetween={40}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={nodejs} className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={react} className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={js} className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mongodb} className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={php} className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bootstrap} className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bootstrap} className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bootstrap} className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bootstrap} className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bootstrap} className="img-fluid" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </SliderSection>
  );
};

export default Slider;
