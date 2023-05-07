import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect("mongodb://0.0.0.0:27017/auth-app")
    .then(() => {
      console.log("database connected");
    })
    .catch((error) => {
      console.log("Database connection error", error);
    });
};
