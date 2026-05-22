import Booking from "../models/Booking.js";

// Create Booking
export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      ...req.body,
      userId: req.user.id,
      status: "pending",
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get My Bookings (User)
export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id })
      .populate("vendorId")
      .populate("serviceId");

    res.json({ bookings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Accept Booking (Vendor)
export const acceptBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByIdAndUpdate(
      id,
      { status: "accepted" },
      { new: true }
    );
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Complete Booking (Vendor)
export const completeBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByIdAndUpdate(
      id,
      { status: "completed" },
      { new: true }
    );
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cancel Booking (User/Vendor)
export const cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByIdAndUpdate(
      id,
      { status: "cancelled" },
      { new: true }
    );
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};