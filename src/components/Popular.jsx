import React, { useState } from "react";
import PopularImage from "./ui/PopularImage.jsx";
import { popularData } from "../Popular.js";
import PopularSlider from "./slider/PopularSlider.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Popular = () => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const breakpoint = 420;

  const Prev = () => {
    currentIndex === 0 ? setCurrentIndex(0) : setCurrentIndex(currentIndex - 1);
  };
  const Next = () => {
    currentIndex === 4 ? setCurrentIndex(4) : setCurrentIndex(currentIndex + 1);
  };

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === popularData.length - 1 ? prevIndex - 4 : prevIndex + 1
        ),
      6000
    );
  }, [index]);
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <section id="popular">
      <div className="popular-container">
        <div
          className="popular-slider-container"
          style={{ transform: `translateX(${-index * 100}%)` }}
        >
          {popularData.map((item) => (
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
          ))}
        </div>
        <div className="row">
        {width < breakpoint ?
          <>
          <div className="popular-tab-carousel">
          <button onClick={Prev} className="previousImageButton">
          <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={Next} className="nextImageButton">
          <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <PopularImage img={popularData[currentIndex].url} />
          </div>
          </>
          :
          <>
          <div className="popular-tab-container">
          {popularData.map((item) => (
            <PopularImage img={item.url} />
            ))}
            </div>
            </>
              }   
        </div>
              
      </div>
    </section>
  );
};

export default Popular;
