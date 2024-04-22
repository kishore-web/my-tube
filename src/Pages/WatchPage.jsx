import React from "react";
import Comments from "../Components/Comments";
import LiveChat from "../Components/LiveChat";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight, PiDotsThreeBold } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { useLocation } from "react-router-dom";

const WatchPage = () => {
  const location = useLocation();
  const videoInfo = location.state?.videoInfo;
  console.log(videoInfo);
  const { channelTitle, description, title, publishedAt, statistics } =
    videoInfo?.snippet;
  console.log(statistics);
  if (!videoInfo) {
    // Handle the case when there is no videoInfo available
    return <div>No video info available</div>;
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "1px solid red", paddingLeft: "200px" }}>
        <div className="video-frame">
          <iframe
            width="500"
            height="305"
            src={"https://www.youtube.com/embed/" + videoInfo.id}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p>{title}</p>
        </div>
        <div className="profile-stats">
          <div className="profile-div">
            <div>
              <img src={videoInfo?.snippet?.thumbnails?.default?.url} alt="" />
            </div>
            <div>
              <p>{channelTitle}</p>
              <p>{statistics?.commentCount}</p>
              <p>Subscribers</p>
            </div>
            <button>Subscribe</button>
          </div>
          <div className="video-stats">
            <div>
              <AiOutlineLike />
              <AiOutlineDislike />
            </div>
            <button>
              <PiShareFatLight /> Share
            </button>
            <button>
              <LiaDownloadSolid /> Download
            </button>
            <div>
              <PiDotsThreeBold />
            </div>
          </div>
          <div>
            <div>
              {" "}
              <p>Views</p> <p>{publishedAt}</p>
            </div>
            <div>
              <p>{description}</p>
              <p>KeyWords</p>
              <p>TAgs</p>
            </div>
          </div>
          <button>more</button>
          <button>showless</button>
        </div>
        <Comments />
      </div>
      <div>
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
