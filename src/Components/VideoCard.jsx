import React from 'react'
import "../Styles/videocard.css";
import { FaEllipsisV } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";

const VideoCard = ({videoInfo}) => {
  console.log(videoInfo)
  return (
    <div>
      <div className="content">
        <div className="thumbnail-div">
          <img
            className="thumbnail-image"
            src={videoInfo?.snippet?.thumbnails?.medium?.url}
            alt="thumbnail"
          />
          <p className="time-stamp">12:30:24</p>
        </div>
        <div className="video-description">
          <div className="channel-picture">
            <img className="profile-picture" src="../src/Assets/author-pic.jpeg" alt="profile-image" />
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
  )
}

export default VideoCard