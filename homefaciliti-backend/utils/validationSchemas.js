import Joi from "joi";

/**
 * =========================
 * USER REGISTER SCHEMA
 * =========================
 */
export const registerSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("user", "vendor", "admin").required(),
});

/**
 * =========================
 * USER LOGIN SCHEMA
 * =========================
 */
export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

/**
 * =========================
 * BOOKING SCHEMA
 * =========================
 */
export const bookingSchema = Joi.object({
  serviceName: Joi.string().required(),
  price: Joi.number().required(),
  date: Joi.string().required(),
  address: Joi.string().required(),
});

/**
 * =========================
 * ID PARAM SCHEMA (🔥 FIX)
 * =========================
 */
export const idParamSchema = Joi.object({
  id: Joi.string().required(),
});

/**
 * =========================
 * VALIDATION MIDDLEWARE
 * =========================
 */
export const validate = (schema, type = "body") => {
  return (req, res, next) => {
    const data = req[type]; // body / params / query

    const { error } = schema.validate(data);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    next();
  };
};