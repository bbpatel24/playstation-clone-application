import React from 'react';

const PreviousHardwareItem = ( { img, title, button, desc } ) => {
    return (
        <div className="previous-hardware-item-container">
            <figure className="previous-hardware-item-image-wrapper">
            <img src={img} alt="" className="previous-hardware-item-image" />
            </figure>
            <p className="previous-hardware-item-title">
            {title}
            </p>
            <p className="previous-hardware-item-description">{desc}</p>
            <button>{button}</button>
        </div>
    );
}

export default PreviousHardwareItem;
