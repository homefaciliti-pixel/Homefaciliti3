import Razorpay from "razorpay";
import crypto from "crypto";
import Booking from "../models/Booking.js";
import Payment from "../models/Payment.js";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Create Order (Payment)
export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100,
      currency: "INR",
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Verify Payment
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body =
      razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      res.json({ message: "Payment verified" });
    } else {
      res.status(400).json({ message: "Invalid signature" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all payments (Admin)
export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate("bookingId");
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};