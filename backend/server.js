import express from "express";
import dotenv from "dotenv";
import { chats } from "./data/data.js";

const server = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

server.get("/", (req, res) => {
  return res.send("welcome to new chat APP");
});

server.get("/api/chat", (req, res) => {
  return res.send(chats);
});

//in request section there is params object which have id property
server.get("/api/chat/:id", (req, res) => {
  //console.log("id :- " , req.params.id);
  const requiredChat = chats.find((c) => c._id === req.params.id);
  return res.send(requiredChat);
});

server.listen(PORT, () => {
  console.log(`server is up and and runing on ${PORT} `);
});
