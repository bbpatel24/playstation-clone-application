import React from "react";

const HardwareItem = ({ img, title, desc, button, click }) => {
  return (
    <div className="hardware-container">
    
      <div className="hardware-description">
        <p className="hardware-description-title">{title}</p>
        <p className="hardware-description-para">{desc}</p>
        <button>{button}</button>
      </div>
      <div className="hardware-display">
      <figure className="hardware-image-wrapper">
        <img src={img} alt="" className="hardware-image" />
      </figure>
    </div>
    </div>
  );
};

export default HardwareItem;
