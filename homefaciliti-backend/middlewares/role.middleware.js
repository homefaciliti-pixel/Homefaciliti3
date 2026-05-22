import AppError from "../utils/appError.js";

/**
 * Role-based access control middleware
 * @param  {...String} allowedRoles
 */
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new AppError("Unauthorized access", 401));
    }

    if (!allowedRoles.includes(req.user.role)) {
      return next(
        new AppError(
          `Access denied. Required role: ${allowedRoles.join(", ")}`,
          403
        )
      );
    }

    next();
  };
};

export default authorizeRoles;