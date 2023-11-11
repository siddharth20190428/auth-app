import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "https://static.thenounproject.com/png/4035887-200.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
