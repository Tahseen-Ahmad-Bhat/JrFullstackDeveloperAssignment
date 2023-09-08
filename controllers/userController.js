import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  const { lastName, firstName, email, mobile } = req.body.userData;

  const user = new User({
    firstName,
    lastName,
    email,
    mobile,
  });

  await user.save();

  res.json({
    user,
    message: "created successfully!",
  });
};
