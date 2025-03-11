import mongoose from "mongoose";
import {
  deleteUser,
  followUser,
  getUser,
  getUserFriends,
  getUserProfile,
  unfollowUser,
  updateProfilePicture,
  updateUser,
} from "../services/user.service.js";

export const updateUserController = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await updateUser(req.params.id, req.body);
      res.status(200).json({
        user,
        message: "Account has been updated successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  } else {
    res.status(500).json("You can only update your account");
  }
};

export const updateProfilePictureController = async (req, res) => {
  try {
    const user = await updateProfilePicture(req.params.id, req.file.path);
    res.status(200).json({
      user,
      message: "Profile Picture has been updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const deleteUserController = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await deleteUser(req.params.id);
      res.status(200).json({
        message: "Account has been deleted succesfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  } else {
    res.status(500).json("You can only delete your account");
  }
};

export const getUserController = async (req, res) => {
  try {
    const user = await getUser(req.params.id);
    const { password, ...data } = user._doc;
    res.status(200).json({
      userInfo: data,
      message: "Account has been fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getUserProfileController = async (req, res) => {
  try {
    const user = await getUserProfile(req.query);
    const { password, ...data } = user._doc;
    res.status(200).json({
      userInfo: data,
      message: "Account has been fetched Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const getUserFriendsController = async (req, res) => {
  try {
    const userId = req.params.userId;
    // console.log(`Received user id is ${userId}`);
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid or missing user id" })
    }

    const friends = await getUserFriends({ userId });
    res.status(200).json({
      friends,
      message: "Friends have been fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const followUserController = async (req, res) => {
  try {
    const data = await followUser(req.body, req.params);
    res.status(200).json({
      data,
      message: "Followed the user successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const unfollowUserController = async (req, res) => {
  try {
    const data = await unfollowUser(req.body, req.params);
    res.status(200).json({
      data,
      message: "Unfollowed User successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};


