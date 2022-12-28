import React from "react";
import Car from "../assets/car.png";
import PSLogo from "../assets/PSLogo.svg";
import SonyImage from "../assets/SonyImage.svg";
const Footer = () => {
  return (
    <section id="footer">
      <div className="row">
        <div className="footer-container">
          <div className="footer-links">
            <div className="footer-wrap">
              <figure className="footer-logo-wrapper">
                <img src={PSLogo} alt="" className="footer-logo" />
              </figure>
              <p className="footer-description">Country/Region: Canada</p>
            </div>
            <div className="footer-list-container">
              <ul className="footer-links-list">
                <li className="footer-link">support</li>
                <li className="footer-link">Privacy Policy</li>
                <li className="footer-link">Website terms of use </li>
                <li className="footer-link">PlayStation Studios</li>
                <li className="footer-link">Legal</li>
                <li className="footer-link">About SIE</li>
                <li className="footer-link">PlayStation and the environment</li>
                <li className="footer-link"></li>
              </ul>
              <ul className="footer-links-list">
                <li className="footer-link">PSN terms of service</li>
                <li className="footer-link">PS Store cancellation policy</li>
                <li className="footer-link">Health warning</li>
                <li className="footer-link">About ratings</li>
                <li className="footer-link">Press release</li>
                <li className="footer-link">Careers</li>
                <li className="footer-link">Developers</li>
                <li className="footer-link">Site map</li>
              </ul>
              <ul className="footer-links-list">
                <li className="footer-link">Facebook</li>
                <li className="footer-link">Twitter</li>
                <li className="footer-link">Youtube</li>
                <li className="footer-link">Instagram</li>
              </ul>
            </div>
          </div>
          <figure className="footer-image-wrapper">
            <img src={SonyImage} alt="" className="footer-copyright-image" />
          </figure>
          <p className="footer-copyright-description">
            © 2022 Sony Interactive Entertainment LLC
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
