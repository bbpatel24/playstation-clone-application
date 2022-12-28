import React from "react";
import PreviousHardwareItem from "./ui/PreviousHardwareItem";
import Hardware1 from "../assets/PreviousHardware1.webp";
import Hardware2 from "../assets/PreviousHardware2.webp";
import Hardware3 from "../assets/PreviousHardware3.webp";

const PreviousHardware = () => {
  return (
    <section id="previous-hardware">
      <div className="row">
        <div className="previous-hardware-container">
          <p className="previous-hardware-title">Explore Playstation 4</p>
          <p className="previous-hardware-description">
            Incredible games, non-stop entertainment. There's never been a
            better time to enjoy PS4.
          </p>
          <div className="previous-hardware-options">
            <PreviousHardwareItem
              img={Hardware1}
              title="PlayStation 4"
              desc="Incredible games live on PS4, with 1 TB storage"
              button="Learn more"
            />
            <PreviousHardwareItem
              img={Hardware2}
              title="PlayStation VR"
              desc="Over 500 games and experiences and counting.See them all"
              button="Learn more"
            />
            <PreviousHardwareItem
              img={Hardware3}
              title="Accessories"
              desc="Enhance your PS4 experience with a range of official accessories"
              button="Learn more"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousHardware;
