import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User Created Successfully" });
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      next(errorHandler(404, "User Not Found"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      next(errorHandler(401, "Invalid Credentials"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    // we don't want to send the password to frontend so we remove it from the JSON
    // validUser gives a lot of unnecessary info so use validUser._doc
    const { password: hashedPassword, ...rest } = validUser._doc;
    // we add session expiry
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    // httpOnly is used as an additional security, so that no 3rd party app can change this cookie
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .send(rest);
  } catch (err) {
    next(err);
  }
};
