import React from "react";
import "../Styles/header.css";
import { FaYoutube, FaSearch, FaMicrophone, FaEllipsisV } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { PiUserCircleLight } from "react-icons/pi";

const Header = () => {
  return (
    <nav className="header">
      <div className="header-left">
        <div>
          <HiBars3 className="bars" />
        </div>
        <div className="icon-section">
          <FaYoutube className="icon" />
          <div className="title-section">
            <h1>YouTube</h1>
            <p>IN</p>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <input className="search-text" type="text" />
        <FaSearch className="search-icon" />
        <FaMicrophone className="microphone" />
      </div>
      <div className="header-right">
        <FaEllipsisV />
        <div className="sign-div">
          <PiUserCircleLight className="user-pic" />
          <p> Sign in</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
