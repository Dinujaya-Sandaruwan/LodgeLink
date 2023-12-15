import React from "react";
import CountUp from "react-countup";
import { HiLocationMarker } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        <aside className="hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>
          <div className="hero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button>Search</button>
          </div>
          <div className="stats">
            <div className="stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span>Premium Products</span>
            </div>
            <div className="stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span>Happy Customers</span>
            </div>
            <div className="stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span>Award Winnings</span>
            </div>
          </div>
        </aside>
        <aside className="hero-right">
          <div className="image-container">
            <img src="./hero-img.png" alt="" />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
