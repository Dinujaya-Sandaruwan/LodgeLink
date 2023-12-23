import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../utils/slider.json";
import { sliderSettings } from "../utils/common";
import PropertyCard from "./PropertyCard";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="r-container">
        <div className="r-head">
          <span>Best Choices</span>
          <span>Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <PropertyCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
