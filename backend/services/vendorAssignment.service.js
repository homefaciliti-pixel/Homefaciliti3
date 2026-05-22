// services/vendorAssignment.service.js

import Vendor from "../models/Vendor.js";
import Service from "../models/Service.js";

/**
 * Auto assign vendor based on service + city + rating
 */
export const assignVendor = async (serviceId, city) => {
  const service = await Service.findById(serviceId);
  if (!service) {
    throw new Error("Service not found");
  }

  const vendors = await Vendor.find({
    services: serviceId,
    isApproved: true
  })
    .populate("userId")
    .sort({ rating: -1 });

  if (!vendors.length) {
    throw new Error("No vendor available");
  }

  // Optional: filter by city (based on user profile)
  const filteredVendors = vendors.filter(
    (vendor) => vendor.userId.city === city
  );

  const selectedVendor =
    filteredVendors.length > 0 ? filteredVendors[0] : vendors[0];

  return selectedVendor;
};