import express from "express";
// import {
//   createSubscriber,
//   getAllSubscriber,
// } from "../controllers/subsciberController.js";
import {
  authUser,
  logoutUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.post("/register", registerUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// router.post("/create-subscriber", createSubscriber);
// router.get("/subscriber", getAllSubscriber);

// // Get subscriber by ID
// router.get('/:userId', userController.getUserById);

export default router;
