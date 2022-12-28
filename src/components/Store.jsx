import React from "react";
import PSLogo from "../assets/PSLogo.svg";
import StoreImage from "../assets/StoreImage.webp";
const Store = () => {
  return (
    <section id="store">
      <div className="row">
        <div className="store-container">
          <div className="store-information">
            <div className="store-header">
              <figure className="store-bag-logo-wrapper">
                <img src={PSLogo} alt="bag" className="store-bag-logo" />
              </figure>
              <h1 className="store-title">PlayStation.Store</h1>
            </div>
            <p className="store-enhance">New savings on playstation Store</p>
            <p className="store-description">
              Explore the latest discounts and the seasonal sales on great games
              and add-ons fro PS5 and PS4
            </p>
            <button className="store-button">See all deals</button>
          </div>
          <div className="store-poster">
            <figure className="store-image-wrapper">
              <img src={StoreImage} alt="store-image" className="store-image" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
