import React from 'react';

const MonthlyFeaturedTab = ({img,title}) => {
    return (
<div className="monthly-featured-tab-container">
<figure className="monthly-featured-tab-image-wrapper">
<img src={img} alt="" className="monthly-featured-tab-image" />
</figure>
<p className="monthly-featured-tab-title">{title}</p>
</div>
    );
}

export default MonthlyFeaturedTab;
