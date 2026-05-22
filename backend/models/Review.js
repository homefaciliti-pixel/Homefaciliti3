import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" },
  rating: Number,
  comment: String
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;