import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { accessChat, fetchChats,creatGroupChat,renameGroup,addToGroup,removeFromGroup } from "../controllers/chatController.js";

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, creatGroupChat);
router.route("/rename").put(protect,renameGroup);
router.route("/groupremove").put(protect,removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

export default router;
