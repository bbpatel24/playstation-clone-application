import React from "react";
import { data } from "../data.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
  import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const NewReleases = () => {
  return (
    <section id="new-releases">
    <div className="row">
    <div className="new-releases-container">
    <div className="new-releases-information">
    <div className="new-releases-information-wrapper">
    <h1 className="new-releases-title">New Releases</h1>
    <p className="new-releases-description">
    Great PS5 and PS4 games available now
    </p>
    </div>
    <div className="new-releases-button">
    <button className="new-releases-arrow-left"><FontAwesomeIcon icon={faArrowLeft} /></button>
    <button className="new-releases-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></button>
    </div>
    </div>
    <div className="new-releases-tab-container">
    {
        data
        .filter((item) => item.newRelease === "true")
        .map((item) => 
        <div className="new-releases-tab-display" >
        <figure className="new-releases-tab-image-wrapper">
        <img src={item.url} alt="" className="new-releases-tab-image" key={item.id}/>
        </figure>
        <p className="new-releases-tab-title" key={item.id}>{item.title}</p>
        </div>
        )
        
    }
    </div>
    </div>
    </div>
    </section>
    );
};

export default NewReleases;
