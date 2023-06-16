import express from "express";
import {
  authUser,
  logoutUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.post("/register", registerUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
