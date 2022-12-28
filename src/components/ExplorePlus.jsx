import React from "react";
import ExplorePlusPoster from "../assets/ExplorePlusPoster.webp";
import ExplorePlusLogo from "../assets/ExplorePlusLogo.webp";
const ExplorePlus = () => {
  return (
    <section id="explore-plus">
    <div className="row">
    <div className="explore-plus-container">
    <div className="explore-plus-information">
    <div className="explore-plus-header">
    <figure className="explore-logo">
    <img
    src={ExplorePlusLogo}
    alt="PlayStation Control Buttons"
    className="explore-plus-logo"
              />
              </figure>
          </div>
          <p className="explore-plus-description">
            Enhance your PlayStation experience with access to online
            multiplayer, monthly games, exclusive discounts and more.
          </p>
          <button>Explore PlayStation Plus</button>
          </div>
          <div className="explore-plus-poster">
          <figure className="explore-plus-image-wrapper">
          <img
              src={ExplorePlusPoster}
              alt=""
              className="explore-plus-image"
              />
          </figure>
          </div>
      </div>
      </div>
      </section>
    );
};

export default ExplorePlus;
