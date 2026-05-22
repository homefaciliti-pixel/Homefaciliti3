// utils/generateOTP.js

import crypto from "crypto";

/**
 * Generate secure numeric OTP
 */
export const generateOTP = (length = 6) => {
  if (length < 4) {
    throw new Error("OTP length must be at least 4 digits");
  }

  const digits = "0123456789";
  let otp = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, digits.length);
    otp += digits[randomIndex];
  }

  return otp;
};

/**
 * Hash OTP before saving in database
 */
export const hashOTP = (otp) => {
  return crypto.createHash("sha256").update(otp).digest("hex");
};

/**
 * Create OTP with expiry
 */
export const createOTPWithExpiry = (expiryMinutes = 10) => {
  const otp = generateOTP();
  const hashedOTP = hashOTP(otp);

  const expiresAt = Date.now() + expiryMinutes * 60 * 1000;

  return {
    otp,
    hashedOTP,
    expiresAt,
  };
};

/**
 * Verify OTP
 */
export const verifyOTP = (enteredOTP, storedHashedOTP, expiresAt) => {
  if (!enteredOTP || !storedHashedOTP) return false;

  if (Date.now() > expiresAt) {
    return false;
  }

  const hashedEntered = hashOTP(enteredOTP);

  return hashedEntered === storedHashedOTP;
};