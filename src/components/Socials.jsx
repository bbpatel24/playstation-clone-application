import React from "react";
import Twitter from "../assets/Twitter.webp";
import Facebook from "../assets/Facebook.webp";
import Instagram from "../assets/Instagram.webp";
import Youtube from "../assets/Youtube.webp";
const Socials = () => {
  return (
    <section id="socials">
      <div className="socials-container">
        <h1 className="socials-title">Follow us on social media</h1>
        <div className="socials-icons">
          <figure className="socials-image-wrapper">
            <img src={Twitter} alt="" className="socials-image" />
          </figure>
          <figure className="socials-image-wrapper">
            <img src={Facebook} alt="" className="socials-image" />
          </figure>
          <figure className="socials-image-wrapper">
            <img src={Instagram} alt="" className="socials-image" />
          </figure>
          <figure className="socials-image-wrapper">
            <img src={Youtube} alt="" className="socials-image" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Socials;
