const Joi = require("joi");

const penaltyschema = Joi.object({
  rental_id: Joi.number().integer(),
  penalty_amount: Joi.number().integer(),
  payment_status: Joi.boolean().default(false),
  remarks: Joi.string(),
  paid_by: Joi.string(),
  user_id: Joi.number().integer(),
});

module.exports = { penaltyschema };
