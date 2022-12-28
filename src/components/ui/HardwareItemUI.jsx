import React from 'react';

const HardwareItemUI = ({img,title}) => {
    return (
        <div className="hardware-items-container">
        <figure className="hardware-items-image-wrapper">
        <img src={img} alt="" className="hardware-items-image" />
        </figure>
        <p className="hardware-items-title">{title}</p>
        </div>    
    );
}

export default HardwareItemUI;
