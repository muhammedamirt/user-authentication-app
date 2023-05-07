import mongoose from "mongoose";
const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  population: { type: Number, required: true }
});

export default mongoose.model('City', citySchema);

