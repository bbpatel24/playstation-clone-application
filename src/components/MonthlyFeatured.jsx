import React from "react";
import MonthlyFeaturedTab from "./ui/MonthlyFeaturedTab.jsx";
import Car from "../assets/car.png";
import Horror from "../assets/MonthlyFeaturedHorror.webp";
import Sports from "../assets/MonthlyFeaturedSports.webp";
import Free from "../assets/MonthlyFeaturedFree.webp";
const MonthlyFeatured = () => {
  return (
    <section id="monthly-featured">
    <div className="row">
    <div className="monthly-featured-container">
    <div className="monthly-featured-information">
    <p className="monthly-featured-title">
    THIS MONTH
    <span className="monthly-featured-enhance">ON PLAYSTATION</span>
          </p>
          <p className="monthly-featured-description">
            Check out this month's biggest releases along with dedicated
            features, guides and more
            </p>
          <button className="monthly-featured-button">Find out more</button>
          </div>
          <div className="monthly-featured-window-container">
          <MonthlyFeaturedTab
            img={Horror}
            title="The best horror games on PS4 and PS5"
          />
          <MonthlyFeaturedTab
            img={Sports}
            title="The best Sports games on PS4 and PS5"
          />
          <MonthlyFeaturedTab
            img={Free}
            title="The best free-to-play games on PS4 and PS5"
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyFeatured;
