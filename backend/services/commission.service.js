// services/commission.service.js

const DEFAULT_COMMISSION_RATE = 0.25; // 25%

/**
 * Calculate commission for a booking
 * @param {Number} totalAmount
 * @param {Number} customRate (optional)
 * @returns {Object}
 */
exports.calculateCommission = (totalAmount, customRate = null) => {
  if (!totalAmount || totalAmount <= 0) {
    throw new Error("Invalid booking amount");
  }

  const rate = customRate || DEFAULT_COMMISSION_RATE;

  const commissionAmount = Number((totalAmount * rate).toFixed(2));
  const vendorAmount = Number((totalAmount - commissionAmount).toFixed(2));

  return {
    totalAmount,
    commissionRate: rate,
    commissionAmount,
    vendorAmount
  };
};