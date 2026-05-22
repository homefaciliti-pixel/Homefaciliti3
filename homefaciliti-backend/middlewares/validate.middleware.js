import Joi from "joi";
import AppError from "../utils/appError.js";

/**
 * Generic validation middleware
 * @param {Object} schemas - { body, params, query }
 */
const validate = (schemas = {}) => {
  return (req, res, next) => {
    try {
      const options = {
        abortEarly: false,
        allowUnknown: false,
        stripUnknown: true,
      };

      // ✅ BODY VALIDATION
      if (schemas.body) {
        const { error, value } = schemas.body.validate(req.body, options);

        if (error) {
          return next(formatJoiError(error));
        }

        req.body = value;
      }

      // ✅ PARAMS VALIDATION
      if (schemas.params) {
        const { error, value } = schemas.params.validate(req.params, options);

        if (error) {
          return next(formatJoiError(error));
        }

        req.params = value;
      }

      // ✅ QUERY VALIDATION
      if (schemas.query) {
        const { error, value } = schemas.query.validate(req.query, options);

        if (error) {
          return next(formatJoiError(error));
        }

        req.query = value;
      }

      next();
    } catch (err) {
      next(err);
    }
  };
};

/**
 * Format Joi errors
 */
const formatJoiError = (error) => {
  const message = error.details
    .map((err) => err.message.replace(/\"/g, ""))
    .join(", ");

  return new AppError(message, 400);
};

export default validate;