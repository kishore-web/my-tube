import React from "react";
import Comments from "./Comments";
import { FaFolder } from "react-icons/fa";
import { useState } from "react";
import "../Styles/commentscontiner.css"
const CommentsContainer = ({ data }) => {
  console.log(data)
  const [expand, setExpand] = useState(false)
  if (data.isFolder) {
  return (
    <div>
      <div className="folder" onClick={()=>setExpand(!expand)}>
        <span>{data.name}</span>
      </div>
      <div style={{display:expand?"block":"none", paddingLeft:"25px"}}>
        {data.items.map((comment) => {

          return <CommentsContainer data={comment} />;
        })}
      </div>
    </div>
  );
  } else {
    return <span className="file">{data.name}</span>;
  }
};

export default CommentsContainer;
