import React from "react";
import LatestBanner from "../assets/LatestBanner.webp"
const Latest = () => {
  return (
    <section id="latest">
      <div className="row">
        <div className="latest-container">
        <figure className="latest-banner-wrapper">
        <img src={LatestBanner} alt="" className="latest-banner"/>
        </figure>
          <p className="latest-title">
            <span className="latest-enhance">Available now</span>
          </p>
          <p className="latest-description">
            Relive the beloved game that started it all - rebuilt for PS5
          </p>
          <button className="latest-button">Buy now</button>
        </div>
      </div>
    </section>
  );
};

export default Latest;
