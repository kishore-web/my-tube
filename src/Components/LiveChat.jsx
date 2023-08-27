import React from "react";
import "../Styles/livechat.css";
import ChatMessage from "./ChatMessage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addMessage } from "../Redux/chatSlice";
import { Randommessage } from "../Utils/helperNameData";
import { generateRandonName } from "../Utils/helperNameData";
import { useState } from "react";

const LiveChat = () => {
  const [liveChat, setLiveChat] = useState("")
  const chatMessage = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    const empty = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandonName(),
          message: Randommessage(20),
        })
      );
    }, 1000);
    return () => clearInterval(empty);
  }, []);
  return (
    <div className="wrapperchat">
      <div className="livechat">
        {chatMessage.map((chat, index) => (
          <ChatMessage name={chat.name} text={chat.message} key={index} />
        ))}
      </div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addMessage({
          name: "Kishore Ch",
          message: liveChat,
        }))
        setLiveChat("")
      }}>
        <input type="text" value={liveChat} onChange={(e)=>{setLiveChat(e.target.value)}} />
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default LiveChat;
