import React from "react";
import Car from "../assets/car.png";
import ClothingItem from "./ui/ClothingItem";
import ClothingLogo from "../assets/ClothingLogo.webp";
import Hoodie from "../assets/Hoodie.webp";
import Tee from "../assets/Tee.webp";
import Cap from "../assets/Cap.webp";
import Cup from "../assets/Cup.webp";
const Clothing = () => {
  return (
    <section id="clothing">
      <div className="clothing-container">
        <figure className="clothing-logo-wrapper">
          <img src={ClothingLogo} alt="" className="clothing-logo" />
        </figure>
        <p className="clothing-title">
          PlayStation official licensed apparel and merchandise
        </p>
        <p className="clothing-description">
          Browse the PlayStation Gear store for official accessories,
          collectibles, clothing and more
        </p>
        <div className="clothing-options-container">
          <ClothingItem
            img={Hoodie}
            title="PlayStation Heritage Zip Up Hoodie"
            button="Shop now"
          />
          <ClothingItem
            img={Tee}
            title="PlayStation Heritage Zip Up Hoodie"
            button="Shop now"
          />
          <ClothingItem
            img={Cap}
            title="PlayStation Heritage Zip Up Hoodie"
            button="Shop now"
          />
          <ClothingItem
            img={Cup}
            title="PlayStation Heritage Zip Up Hoodie"
            button="Shop now"
          />
        </div>
        <div className="clothing-shop-all">
          <button className="clothing-button">Shop the Collection</button>
        </div>
      </div>
    </section>
  );
};

export default Clothing;
