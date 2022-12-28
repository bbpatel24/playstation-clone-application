import React from 'react';

const ClothingItem = ({img,title,button}) => {
    return (
        <div className="clothing-options">
          <div className="clothing-item">
          <figure className="clothing-item-image-wrapper">
          <img src={img} alt="" className="clothing-item-image" />
          </figure>
          <p className="clothing-item-title">
          {title}
          </p>
          <button className="clothing-item-button">
          {button}
          </button>
          </div>  
        </div>
    );
}

export default ClothingItem;
