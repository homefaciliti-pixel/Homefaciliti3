import Vendor from "../models/Vendor.js";
import Booking from "../models/Booking.js";

// Get Vendors by Service
export const getVendorsByService = async (req, res) => {
  try {
    const { id } = req.params; // serviceId
    const vendors = await Vendor.find({ services: id, isApproved: true })
      .populate("userId", "name phone city")
      .sort({ rating: -1 });
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Vendor Dashboard
export const getDashboard = async (req, res) => {
  try {
    const vendor = await Vendor.findOne({ userId: req.user.id });
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });

    const totalBookings = await Booking.countDocuments({ vendorId: vendor._id });
    const completedBookings = await Booking.countDocuments({
      vendorId: vendor._id,
      status: "completed",
    });

    res.json({
      vendor,
      stats: {
        totalBookings,
        completedBookings,
        earnings: vendor.earnings,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Vendor Bookings
export const getVendorBookings = async (req, res) => {
  try {
    const vendor = await Vendor.findOne({ userId: req.user.id });
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });

    const bookings = await Booking.find({ vendorId: vendor._id })
      .populate("userId", "name phone")
      .populate("serviceId");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Availability
export const updateAvailability = async (req, res) => {
  try {
    const { isAvailable } = req.body;
    const vendor = await Vendor.findOneAndUpdate(
      { userId: req.user.id },
      { isAvailable },
      { new: true }
    );
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Approve Vendor (Admin)
export const approveVendor = async (req, res) => {
  try {
    const { id } = req.params;
    const vendor = await Vendor.findByIdAndUpdate(
      id,
      { isApproved: true },
      { new: true }
    );
    res.json({ message: "Vendor approved successfully", vendor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};