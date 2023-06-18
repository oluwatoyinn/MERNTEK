import mongoose from "mongoose";

const occupationSchema = new mongoose.Schema({ 
  name: { type: String, required: true },
});

const subscriberSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    userName: { type: String, required: true },
    phone: { type: Number, required: true },
    occupation: { type: [occupationSchema]},
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Subscribers = mongoose.model("Subscribers", subscriberSchema);

export default Subscribers;
