import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    services: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service"
      }
    ],
    rating: {
      type: Number,
      default: 5,
      min: 0,
      max: 5
    },
    earnings: {
      type: Number,
      default: 0,
      min: 0
    },
    isApproved: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

// Optional: Index for faster vendor lookup
vendorSchema.index({ userId: 1 });

const Vendor = mongoose.model("Vendor", vendorSchema);

export default Vendor;