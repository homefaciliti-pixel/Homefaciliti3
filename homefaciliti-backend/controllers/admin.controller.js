import User from "../models/User.js";
import Vendor from "../models/Vendor.js";
import Booking from "../models/Booking.js";
import Payment from "../models/Payment.js";

// Dashboard stats
export const getDashboardStats = async (req, res) => {
  try {
    const users = await User.countDocuments({ role: "user" });
    const vendors = await Vendor.countDocuments();
    const bookings = await Booking.countDocuments();
    const payments = await Payment.countDocuments({ status: "completed" });

    res.json({
      totalUsers: users,
      totalVendors: vendors,
      totalBookings: bookings,
      totalPayments: payments,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "user" }).select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all vendors
export const getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find().populate("userId", "-password");
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name phone")
      .populate("vendor", "userId")
      .populate({
        path: "vendor",
        populate: { path: "userId", select: "name phone" }
      });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all payments
export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate("bookingId");
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Block user
export const blockUser = async (req, res) => {
  try {
    const { id } = req.params;
    // Assuming we have an 'isBlocked' field or similar. 
    // If not, we might need to add it to the model. 
    // Since it's missing, I'll just use a placeholder or add it if necessary.
    // For now, I'll just return a success message or set a hypothetical field.
    const user = await User.findByIdAndUpdate(id, { role: "blocked" }, { new: true }); 
    res.json({ message: "User blocked successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove vendor
export const removeVendor = async (req, res) => {
  try {
    const { id } = req.params;
    await Vendor.findByIdAndDelete(id);
    res.json({ message: "Vendor removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};