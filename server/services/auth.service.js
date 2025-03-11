import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (body) => {
  const hashedPassword = bcrypt.hashSync(body.password, 10);
  const newUser = new UserModel({
    username: body.username,
    email: body.email,
    password: hashedPassword,
  });

  await newUser.save();

  return newUser;
};

export const loginUser = async (body, res) => {
  const user = await UserModel.findOne({ email: body.email });
  if (!user) {
    throw new Error("User not found");
  }

  const passwordCheck = await bcrypt.compare(body.password, user.password);
  if (!passwordCheck) {
    throw new Error("Wrong Password")
  }

  return user;
};
