import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userAddressSchema = new Schema(
  {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("UserAddress", userAddressSchema);
