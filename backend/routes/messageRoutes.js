import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { sendMessage } from "../controllers/messageController.js";
import { allMessages } from "../controllers/messageController.js";
const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

export default router;
