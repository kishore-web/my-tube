import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import "../Styles/maincontent.css";

const MainContent = () => {
  return (
    <div className="content-container box">
      <div className="content">
        <div className="thumbnail-div">
          <img
            className="thumbnail-image"
            src="../src/Assets/thumb.webp"
            alt="thumbnail"
          />
        </div>
        <div className="video-description">
          <div className="author-div">
            <img src="../src/Assets/author-pic.jpeg" alt="author-image" />
          </div>
          <div className="thumbnail-description">
            <div className="thumb-title">
              How I learned to Code in 6 MONTHS &amp; Got a Job Offer
              (Self-Taught)
            </div>
            <div className="channel">
              <div>Channel Name</div>
              <div>
                <VscVerifiedFilled />
              </div>
            </div>
            <div className="views-time">
              <span className="views">views</span>
              <span>&#183;</span>
              <span className="time">months ago</span>
            </div>
          </div>
          <div className="share-section">
            <FaEllipsisV />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
