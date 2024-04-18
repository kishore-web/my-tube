import React from "react";
import "../Styles/header.css";
import {
  FaYoutube,
  FaSearch,
  FaMicrophone,
  FaEllipsisV,
  FaResearchgate,
} from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { PiUserCircleLight } from "react-icons/pi";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();

  return (
    <nav className="header">
      <div className="header-left">
        <div>
          <HiBars3 className="bars" />
        </div>
        <Link to="/" className="header-link">
          <div className="icon-section">
            <FaYoutube className="icon" />
            <div className="title-section">
              <h1>YouTube</h1>
              <p>IN</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="header-middle">
        <input className="search-text" type="text" placeholder="Search" />
        <FaSearch className="search-icon" />
        <FaMicrophone className="microphone" />
      </div>
      <div className="header-right">
        <div>{isAuthenticated && <p>{user.name}</p>}</div>
        <div>
          {isAuthenticated ? (
            <button
              className="signOut-btn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Sign Out
            </button>
          ) : (
            <div className="header-right">
              <FaEllipsisV />
              <button
                className="signIn-btn"
                onClick={() => loginWithRedirect()}
              >
                <PiUserCircleLight className="user-pic" />
                Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
