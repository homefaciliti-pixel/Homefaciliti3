import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
    status: {
      type: String,
      enum: ["pending", "accepted", "completed", "cancelled"],
      default: "pending"
    },
    totalAmount: Number,
    commissionAmount: Number
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;