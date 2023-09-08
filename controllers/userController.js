import User from "../models/userModel.js";
import UserAddress from "../models/addressModel.js";

export const createUser = async (req, res) => {
  const { lastName, firstName, email, mobile, city, state, pinCode, country } =
    req.body.userData;

  // Creating user-detail document
  const user = new User({
    firstName,
    lastName,
    email,
    mobile,
  });

  // Creating user-address document
  const userAddress = new UserAddress({
    city,
    state,
    pinCode,
    country,
  });

  // Saving both the documents in database
  await user.save();

  await userAddress.save();

  res.json({
    user,
    message: "created successfully!",
  });
};
