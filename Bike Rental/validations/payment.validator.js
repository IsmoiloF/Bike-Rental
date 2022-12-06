const Joi = require("joi");

const paymentschema = Joi.object({
  rental_id: Joi.number().integer(),
  payment_type: Joi.boolean().default(false),
  paid_by: Joi.string(),
  payment_date: Joi.date(),
  remarks: Joi.string(),
  user_id: Joi.number().integer(),
});

module.exports = { paymentschema };
