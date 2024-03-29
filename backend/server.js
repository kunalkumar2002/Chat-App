import express from "express";
import dotenv from "dotenv";
import { chats } from "./data/data.js";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const server = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
server.use(cors());

server.use(express.json());

server.get("/", (req, res) => {
  return res.send("welcome to new chat APP");
});

server.use("/api/user", userRoutes);
server.use("/api/chat", chatRoutes);
server.use("/api/message", messageRoutes);

server.use(notFound);
server.use(errorHandler);

server.listen(PORT, () => {
  console.log(`server is up and and runing on ${PORT} `);
});
