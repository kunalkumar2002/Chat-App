import React, { useState } from "react";
import { ChatState } from "../Context/chatProvider.js";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../component/miscellaneous/sideDrawer.js";
import MyChats from "../component/myChats.js";
import ChatBox from "../component/chatBox.js";


const Chat = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  //console.log(user);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w={"100%"}
        h={"91.5vh"}
        p={"10px"}
      >
        {user &&( <MyChats fetchAgain={fetchAgain} />)}
        {user && (<ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />)}
      </Box>
    </div>
  );
};

export default Chat;
