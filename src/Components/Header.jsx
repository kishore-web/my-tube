import React from "react";
import "../Styles/header.css";
import { FaYoutube, FaSearch, FaMicrophone, FaEllipsisV } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { PiUserCircleLight } from "react-icons/pi";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
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

// <div>{isAuthenticated && <p>{user.name}</p>}</div>
//         <div>
//           {isAuthenticated ? (
//             <button
//               className="signOut-btn"
//               onClick={() =>
//                 logout({ logoutParams: { returnTo: window.location.origin } })
//               }
//             > <PiUserCircleLight className="user-pic" />
//               Sign Out
//             </button>
//           ) : (
//             <button className="signIn-btn" onClick={() => loginWithRedirect()}>
//               <PiUserCircleLight className="user-pic" />
//               Sign In
//             </button>
//           )}
//         </div>
