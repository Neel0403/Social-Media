import { registerUser } from "../services/auth.service.js";

// Register
export const register = async (req, res) => {
  try {
    const newUser = await registerUser(req.body);

    const { password, ...data } = newUser._doc;
    res.status(200).json({
      newUser,
      message: "User Registered Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: "Something went wrong while registering the user",
    });
    console.log(error);
  }
};
