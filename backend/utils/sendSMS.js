// utils/sendSMS.js

import axios from "axios";
import * as logger from "./logger.js";

/**
 * Send SMS utility
 * Works in 2 modes:
 * - development → logs to console
 * - production → sends real SMS via provider
 */

const sendSMS = async (phone, message) => {
  try {
    if (!phone || !message) {
      throw new Error("Phone and message are required");
    }

    // Development mode (no real SMS)
    if (process.env.NODE_ENV !== "production") {
      console.log("📩 SMS MOCK");
      console.log("To:", phone);
      console.log("Message:", message);
      return;
    }

    // ===== PRODUCTION MODE (Example: MSG91) =====
    // You can change provider here

    const response = await axios.post(
      "https://api.msg91.com/api/v5/flow/",
      {
        template_id: process.env.MSG91_TEMPLATE_ID,
        short_url: "0",
        recipients: [
          {
            mobiles: `91${phone}`,
            message
          }
        ]
      },
      {
        headers: {
          authkey: process.env.MSG91_AUTH_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    logger.info(`SMS sent successfully to ${phone}`);
    return response.data;

  } catch (error) {
    logger.error(`SMS sending failed: ${error.message}`);
    throw error;
  }
};

export default sendSMS;