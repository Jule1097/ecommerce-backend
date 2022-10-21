import User from "../models/User";

export const createUser = (req, res) => {
  res.json("creating user");
};

export const getUser = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
