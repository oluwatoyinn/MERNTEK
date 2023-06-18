import { createSubscriber,  getAllSubscriber, getSubscriberById, updateSubscriberById} from "../controllers/subsciberController.js";
import express from "express";

const router = express.Router();

router.post("/create-subscriber", createSubscriber); 

router.get("/subscriber", getAllSubscriber);

// Get subscriber by ID
router.get("/subscriber/:subscriberId", getSubscriberById);

// Get subscriber by ID
router.put("/subscriber/:subscriberId", updateSubscriberById);

export default router;
