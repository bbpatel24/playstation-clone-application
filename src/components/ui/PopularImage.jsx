import React from 'react'

export default function PopularImage({img,title}) {
  return (
    <div className="popular-image-container">
    <figure className="popular-image-wrapper">
    <img src={img} alt="" className="popular-image" />
    </figure>
</div>
  )
}
