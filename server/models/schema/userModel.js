//importing mongoose here
import mongoose from "mongoose";

// create a small schema for user
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  city: { type: mongoose.Schema.Types.ObjectId, ref: "City" },
});

// exporting the model here
export default mongoose.model("users", userSchema);
