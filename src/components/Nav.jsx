import React from "react";
import PSLogo from "../assets/PSLogo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-services">
          <figure className="nav-logo-wrapper">
            <img src={PSLogo} alt="PS-logo" className="nav-logo"/>
          </figure>
          <ul className="service-list">
            <li>
              <a href="" className="service-link">
                Games
              </a>
            </li>
            <li>
              <a href="" className="service-link">
                Hardware
              </a>
            </li>
            <li>
              <a href="" className="service-link">
                Services
              </a>
            </li>
            <li>
              <a href="" className="service-link">
                News
              </a>
            </li>
            <li>
              <a href="" className="service-link">
                Shop
              </a>
            </li>
            <li>
              <a href="" className="service-link">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-explore">
          <button className="sign-in">Sign In</button>
          <a href="" className="sign-in-link"><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
