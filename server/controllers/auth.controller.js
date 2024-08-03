import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.js";
import dotenv from "dotenv";
import { createToken } from "../utils/createToken.js";

dotenv.config();

//Function to create jason web token (JWT)

export const signup = async (req, res, next) => {
  //Extracting the fields from the request body
  const { username, email, password } = req.body;

  //Checking if the fields are empty
  if (
    !username ||
    !email ||
    !password ||
    !username.trim() === "" ||
    !email.trim() === "" ||
    !password.trim() === ""
  ) {
    return next(errorHandler(400, "Please provide all the fields"));
  }

  if (password.length < 5) {
    return next(errorHandler(400, "Password should be atleast 5 characters"));
  }

  if (username.length < 3) {
    return next(errorHandler(400, "Username should be atleast 3 characters"));
  }

  //Hashing the password
  const hashedPassword = bcryptjs.hashSync(password, 10);
  //Creating The User
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    //Saving the user
    await newUser.save();
    //Creating the token
    const token = createToken(newUser._id);
    res.status(200).json({ email, token });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  //Extracting the fields from the request body
  const { email, password } = req.body;
  //Checking if the fields are empty
  if (!email || !password || email.trim() === "" || password.trim() === "") {
    return next(errorHandler(400, "Please provide all the fields"));
  }
  try {
    //Checking the credentials
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, "Invalid Credentials"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid Credentials"));
    }
    //Creating the token
    const token = createToken(validUser._id);
    const userdata = {
      _id: validUser._id,
      username: validUser.username,
      email: validUser.email,
      profilePhoto: validUser.profilePhoto,
      createdDate: validUser.createdDate,
      updatedDate: validUser.updatedDate,
      token,
    };
    //Saving the token as a cookie
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(userdata);
  } catch (err) {
    next(err);
  }
};
