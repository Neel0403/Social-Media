import { updateUser } from "../services/user.service.js";

export const updateUserController = async (req, res) => {
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
};
