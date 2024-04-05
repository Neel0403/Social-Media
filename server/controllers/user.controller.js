import { deleteUser, getUser, updateUser } from "../services/user.service.js";

export const updateUserController = async (req, res) => {
  if ((req.body.userId = req.params.id || req.body.isAdmin)) {
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

export const deleteUserController = async (req, res) => {
  if ((req.body.userId = req.params.id || req.body.isAdmin)) {
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
      data,
      message: "Account has been fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
