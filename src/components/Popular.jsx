import React, { useState } from "react"
import PopularImage from "./ui/PopularImage.jsx"
import { popularData } from "../Popular.js"
import PopularSlider from "./slider/PopularSlider.jsx"
const Popular = () => {

    const [index, setIndex] = useState(0);
    React.useEffect(() => {
      setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === popularData.length - 1 ? prevIndex - 4 : prevIndex + 1
          ),
        6000
      );
  
      return () => {};
    }, [index]);
  return (
    <section id="popular">

    <div className="popular-container">
    <div className="popular-slider-container"
        style={{transform: `translateX(${-index * 100}%)`}}
        >
    {
      popularData.map((item) =>(
        <>
        <PopularSlider
        img={item.url}
        title={item.title}
        desc={item.description}
        button={item.button}
        banner={item.banner}
        index={index}
        
        key={item.id}
       />
       </>
       ))
    }
    </div>
    <div className="row">
    <div className="popular-tab-container">

    {
      popularData.map((item) =>(
        <>
        
        <PopularImage 
        img={item.url}
       key={item.id}
       />
       </>
       ))
      }
      </div>
      </div>
      </div>
      </section>
      );
    };

export default Popular;
