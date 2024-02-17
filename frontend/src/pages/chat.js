import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [chats, setChats] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/chat");
      console.log(response.data);
      setChats(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {chats.map((chat) => <div key={chat._id}>{chat.chatName}</div>)}
    </div>
  );
};

export default Chat;
