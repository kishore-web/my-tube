import React from "react";
import userImage from "../Assets/userimage.jpeg";
import "../Styles/chatmessage.css";

const ChatMessage = ({ name, text }) => {
  return (
    <div className="chatmessage">
      <div>
        <img src={userImage} alt={"user_image"} />
      </div>
      <div className="nametext">
        <span className="textname">
          <b>{name}: </b>
        </span>
        <span className="textmessage">{text}</span>
      </div>
    </div>
  );
};
export default ChatMessage;