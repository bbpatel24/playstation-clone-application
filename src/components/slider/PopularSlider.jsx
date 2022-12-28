import React  from 'react';

const PopularSlider = ({title,desc,button,img,banner,index}) => { 
  return (
        <div className="slide" >
        <figure className="slider-image-wrapper">
        <img src={img} alt="" className="slider-image"/>
          </figure>
        <div className="slider-information">
        {    
          banner ? 
          <figure className="slider-banner-wrapper">
          <img src={banner} alt="" className="slider-banner" />
        </figure>
        : null
          }
        
        <p className="slider-title"
     >{title}</p>
        <p className="slider-description">{desc}</p>
        <button className="slider-button">{button}</button>
        </div>
        <div className="slider-display">
        
          </div>
          </div>
          );
        }

export default PopularSlider;
