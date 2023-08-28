import React from 'react'
import "../Styles/videocard.css";
import { FaEllipsisV } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import ParseDuration from "./ParseDuration.jsx"
import {FormatViews, DateDifference} from "./ParseDuration.jsx"

const VideoCard = ({videoInfo}) => {
  console.log(videoInfo)
  const isoDuration = videoInfo?.contentDetails?.duration
  const views = Number(videoInfo?.statistics?.viewCount)
  const inputDate = videoInfo?.snippet?.publishedAt
  console.log(views)
  return (
    <div>
      <div className="content">
        <div className="thumbnail-div">
          <img
            className="thumbnail-image"
            src={videoInfo?.snippet?.thumbnails?.medium?.url}
            alt="thumbnail"
          />
          <p className="time-stamp"><ParseDuration isoDuration={isoDuration} /> </p>
        </div>
        <div className="video-description">
          <div className="channel-picture">
            <img className="profile-picture" src={videoInfo?.snippet?.thumbnails?.default?.url} alt="profile-image" />
          </div>
          <div className="thumbnail-description">
            <div className="thumb-title">
              {videoInfo?.snippet?.title}
            </div>
            <div className="channel">
              <p>{videoInfo?.snippet.channelTitle}</p>
                <VscVerifiedFilled />
            </div>
            <div className="views-time">
              <span className="views"> <FormatViews views={views} /> views</span>
              <span>&#183;</span>
              <span className="time"><DateDifference inputDate={inputDate} /> ago</span>
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