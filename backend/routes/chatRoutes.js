import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { accessChat } from "../controllers/chatController.js";

const router = express.Router();

router.route('/').post(protect, accessChat);
//router.route("/").get(protect, fetchChats);
//router.route("/").post(protect,creatGroupChat);
//router.route("/groupremove").put(protect,removeFromGroup);
//router.route("/groupadd").put(protect, addToGroup);

export default router