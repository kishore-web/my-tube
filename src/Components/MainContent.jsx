import React from "react";
import VideoCard from "./VideoCard";
import "../Styles/maincontent.css";
import { YOU_TUBE_API } from "../Utils/Constant";
import { useState } from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom'
const MainContent = () => {
  const [videos, setVideos] = useState([]);
  const fetchVideos = async () => {
    const fetchData = await fetch(YOU_TUBE_API);
    const data = await fetchData.json();
    console.log(data)
    setVideos(data?.items);
    console.log(data?.items);
  };
  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="video-grid">
      {videos &&
        videos.map((item) => (
          <Link to={`/watch?v=${item.id}`} key={item.id}>
            <VideoCard videoInfo={item} />
          </Link>
        ))}
    </div>
  );
};

export default MainContent;
