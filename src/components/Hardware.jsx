import React from "react";
import PS5 from "../assets/PS5.webp"
import HardwareItem from "./ui/HardwareItem";
import HardwareItemUI from "./ui/HardwareItemUI"
import {hardwareData} from "../Hardware"

const Hardware = () => {

  return (
    <section id="hardware">
    <div className="row">
    <HardwareItem
    img={PS5}
        title="PlayStation 5 Console"
        desc="Experience an all-new generation of incredible PlayStation games."
        button="Learn more"
        />
        <div className="hardware-tab-container">
        {
          hardwareData.map((hardwareItem) => 
          <HardwareItemUI
          img={hardwareItem.url}
          title={hardwareItem.title}
        />
          )}
          </div>
          </div>
    </section>
  );
};

export default Hardware;
