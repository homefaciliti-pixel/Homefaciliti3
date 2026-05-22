// services/notification.service.js

import sendSMS from "../utils/sendSMS.js";
import * as logger from "../utils/logger.js";

/**
 * Send booking confirmation to user
 */
export const sendBookingConfirmation = async (userPhone, bookingId) => {
  const message = `Your booking ${bookingId} is confirmed. Thank you for choosing HomeFaciliti.`;

  await sendSMS(userPhone, message);

  logger.info(`Booking confirmation sent to ${userPhone}`);
};

/**
 * Notify vendor about new booking
 */
export const notifyVendor = async (vendorPhone, bookingId) => {
  const message = `New booking assigned: ${bookingId}. Please check your dashboard.`;

  await sendSMS(vendorPhone, message);

  logger.info(`Vendor notified: ${vendorPhone}`);
};

/**
 * Generic notification function (future extension)
 */
export const sendNotification = async ({ phone, message }) => {
  await sendSMS(phone, message);
  logger.info(`Notification sent to ${phone}`);
};