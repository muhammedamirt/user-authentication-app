//import user collection here
import User from "../models/schema/userModel.js";

//import jwt
import jwt from "jsonwebtoken";

// import bcrypt module for encryption
import bcrypt from "bcrypt";
//setting salt rounds for bcrypt
const saltRounds = 10;

//user login functionalities here
export const userLogin = async (req, res) => {
  try {
    // destructuring data from req.body
    const { email, password } = req.body;
    const secretKey = process.env.JWT_SECRET;
    const options = {
      expiresIn: "1h", // Set the expiry date for the JWT token
    };
    // finding the user document from collection
    const user = await User.findOne({ email });
    if (user !== null) {
      // checking if the password is correct
      if (bcrypt.compare(password, user.password)) {
        // Generate JWT token for the new user
        const token = jwt.sign({ userId: user?._id }, secretKey, options);
        // sending response for user exist
        res.send({ status: true, userExist: true, token });
      } else {
        // sending response for wrong password
        res.send({ status: false, passwordWrong: false });
      }
    } else {
      // sending response for user not exist
      res.send({ status: true, userExist: false });
    }
  } catch (error) {
    console.log(error);
  }
};

// user register functionalities here
export const userRegister = async (req, res) => {
  try {
    // destructuring data from req.body
    const { name, email, password } = req.body;
    const secretKey = process.env.JWT_SECRET;
    const options = {
      expiresIn: "1h", // Set the expiry date for the JWT token
    };
    // finding the user document from collection
    const user = await User.findOne({ email });
    if (user === null) {
      // creating new user
      const newUser = new User({
        name,
        email,
        password: await bcrypt.hash(password, saltRounds),
      });
      // saving the user document in collection
      await newUser.save();
      // Generate JWT token for the new user
      const token = jwt.sign({ userId: newUser?._id }, secretKey, options);
      // sending response for user registered
      res.send({ status: true, userRegistered: true, token });
    } else {
      // sending response for user exist
      res.send({ status: true, userExist: true });
    }
  } catch (error) {
    console.log(error);
  }
};

// if token not expires function will give response
export const checkTokenExpires = (req, res) => {
  try {
    /* we only want to sent the response, because we are already checking 
    user authorized or unAuthorized or not in middleware */
    res.send({ status: true, userAuthorized: true });
  } catch (error) {
    res.send(error);
  }
};

//function for google auth

export const googleLogin = async (req, res) => {
  try {
    // destructuring data from req.body
    const {email} = req.body;
    const secretKey = process.env.JWT_SECRET;
    const options = {
      expiresIn: "1h", // Set the expiry date for the JWT token
    };
    // finding the user document from collection
    const user = await User.findOne({ email });
    if (user === null) {
      // creating new user
      const newUser = new User({
        email,
      });
      // saving the user document in collection
      await newUser.save();
      // Generate JWT token for the new user
      const token = jwt.sign({ userId: newUser?._id }, secretKey, options);
      // sending response for user registered
      res.send({ status: true, userRegistered: true, token });
    } else {
      // sending response for user exist
      res.send({ status: true, userExist: true });
    }
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = (req, res) => {
  // Assuming you have stored the user's JWT token in a cookie or request header
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      // Send a response to the client indicating successful logout
      res
        .status(200)
        .json({ message: "User logged out successfully.", userLogout: true });
    } catch (error) {
      // If the JWT token is invalid or expired, handle the error accordingly
      res.status(401).json({
        error: "Invalid or expired token. User could not be logged out.",
      });
    }
  } else {
    // If no token is found, handle the error accordingly
    res
      .status(401)
      .json({ error: "No token found. User could not be logged out." });
  }
};
