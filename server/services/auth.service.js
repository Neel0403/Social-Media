import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (body) => {
  const hashedPassword = bcrypt.hashSync(body.password, 10);
  const newUser = new UserModel({
    username: body.username,
    email: body.email,
    password: hashedPassword,
  });

  const { password, ...data } = newUser._doc;

  await newUser.save();

  return newUser;
};
