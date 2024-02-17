import mongoose from "mongoose";

const chatModel = mongoose.Schema(
  {
    chatName: {
      type: String,
      trim: true,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    users: [
      {
        type: mongoose.schima.Types.objectId,
        ref: "user",
      },
    ],
    latestMessage: {
      type: mongoose.schima.Types.objectId,
      ref: "message",
    },
    groupAdmin: {
      type: mongoose.schima.Types.objectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
