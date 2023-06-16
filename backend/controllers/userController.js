import asyncHandler from "express-async-handler";
import User from "./../models/userModel.js";
import generateToken from "./../utils/generateToken.js";

//user authentication
//POST /api/users/auth

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

//user register new user
//POST /api/users public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

//user logout user
//POST /api/users public

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

//user get user profile
//GET /api/profile
//PRIVATE

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get User Profile" });
});

//user UPDATE user profile
//PUT /api/profile
//PRIVATE

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});

export {
  authUser,
  logoutUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
};
