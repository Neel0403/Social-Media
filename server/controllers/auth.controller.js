import { loginUser, registerUser } from "../services/auth.service.js";

// Register
export const register = async (req, res) => {
  try {
    const newUser = await registerUser(req.body);

    const { password, ...data } = newUser._doc;
    res.status(200).json({
      data,
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

export const login = async (req, res) => {
  try {
    const loggedInUser = await loginUser(req.body);
    // omit password from data returned
    const { password, ...data } = loggedInUser._doc;
    res.status(200).json({
      message: "User logged In successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: "Error occurred while logging in user",
    });
    console.log(error);
  }
};
