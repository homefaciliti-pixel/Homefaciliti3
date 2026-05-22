import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  duration: Number,
  city: String
});

const Service = mongoose.model("Service", serviceSchema);
export default Service;