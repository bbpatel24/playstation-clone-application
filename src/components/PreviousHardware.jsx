import React, { useState, useEffect } from "react";
import PreviousHardwareItem from "./ui/PreviousHardwareItem";
import Hardware1 from "../assets/PreviousHardware1.webp";
import Hardware2 from "../assets/PreviousHardware2.webp";
import Hardware3 from "../assets/PreviousHardware3.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
  import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const PreviousHardware = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 420;

  const sliderArr = [
    {
      img: `${Hardware1}`,
      title: "PlayStation 4",
      desc: "Incredible games live on PS4, with 1 TB storage",
      button: "Learn More",
    },
    {
      img: `${Hardware2}`,
      title: "PlayStation VR",
      desc: "Over 500 games and experiences and counting.See them all",
      button: "Learn More",
    },
    {
      img: `${Hardware3}`,
      title: "Accessories",
      desc: "Enhance your PS4 experience with a range of official accessories",
      button: "Learn More",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const Prev = () => {
    currentIndex === 0 ? setCurrentIndex(0) : setCurrentIndex(currentIndex - 1);
  };
  const Next = () => {
    currentIndex === 2 ? setCurrentIndex(2) : setCurrentIndex(currentIndex + 1);
  };
 useEffect(()=>{
  const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [])
  return (
    <section id="previous-hardware">
      <div className="row">
        <div className="previous-hardware-container">
          <p className="previous-hardware-title">Explore Playstation 4</p>
          <p className="previous-hardware-description">
            Incredible games, non-stop entertainment. There's never been a
            better time to enjoy PS4.
          </p>
          {width < breakpoint ? ( 
            <>
            <div className="previous-hardware-carousel">
              <button onClick={Prev} className="prevButton">
              <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button onClick={Next} className="nextButton">
              <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <PreviousHardwareItem
                img={sliderArr[currentIndex].img}
                title={sliderArr[currentIndex].title}
                desc={sliderArr[currentIndex].desc}
                button={sliderArr[currentIndex].button}
              />
            </div>
            </> 
          ): (
            <>
            <div className="previous-hardware-options">
            <PreviousHardwareItem
                img={Hardware1}
                title="PlayStation 4"
                desc="Incredible games live on PS4, with 1 TB storage"
                button="Learn more"
              />
              <PreviousHardwareItem
                img={Hardware2}
                title="PlayStation VR"
                desc="Over 500 games and experiences and counting.See them all"
                button="Learn more"
              />
              <PreviousHardwareItem
              img={Hardware3}
              title="Accessories"
              desc="Enhance your PS4 experience with a range of official accessories"
              button="Learn more"
              />
              </div>
              </>
              )}
        </div>
      </div>
    </section>
  );
};

export default PreviousHardware;
