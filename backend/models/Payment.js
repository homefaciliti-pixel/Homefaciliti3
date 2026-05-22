import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: "Booking" },
  amount: Number,
  status: String,
  transactionId: String
});

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;