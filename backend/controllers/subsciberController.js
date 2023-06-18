import asyncHandler from "express-async-handler";
import Subscribers from "../models/subscriberModel.js";

//Create a subscriber

const createSubscriber = asyncHandler(async (req, res) => {
  try {
    const newSubscriber = new Subscribers(req.body);
    const subscriber = await newSubscriber.save();
    res.status(201).json(subscriber);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all subscriber
const getAllSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscribers.find();
    res.status(200).json(subscriber);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get subscriber by ID

const getSubscriberById = async (req, res) => {
  const { subscriberId } = req.params;
  try {
    const subscriber = await Subscribers.findById(req.subscriber._id);
    console.log("req", req);
    if (!subscriber) {
      return res.status(404).json({ message: "Subscriber not found" });
    }
    res.status(200).json(subscriber);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update subscriber by ID
const updateSubscriberById = async (req, res) => {
  const { subscriberId } = req.params;
  try {
    const updatedSubscriber = await User.findByIdAndUpdate(
      subscriberId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedSubscriber) {
      return res.status(404).json({ message: "Subscriber not found" });
    }
    res.status(200).json(updatedSubscriber);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export {
  createSubscriber,
  getAllSubscriber,
  getSubscriberById,
  updateSubscriberById,
};
