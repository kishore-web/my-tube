import React, { useState } from "react";
import explorer from "../Utils/CommentData";
import CommentsContainer from "./CommentsContainer";

const Comments = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log(explorerData);
  console.log(explorer);
  return (
    <div>
      <CommentsContainer data={explorerData}/>
    </div>
  );
};

export default Comments;
