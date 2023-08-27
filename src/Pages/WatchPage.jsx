import React from "react";
import { useSearchParams } from "react-router-dom";
import LiveChat from "../Components/LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  return (
    <div style={{display:"flex"}}>
      <div style={{ border: "1px solid red", paddingLeft: "200px" }}>
        <iframe
          width="500"
          height="305"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
