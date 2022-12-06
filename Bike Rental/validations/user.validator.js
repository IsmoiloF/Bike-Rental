const Joi = require("joi");

const userschema = Joi.object({
  user_name: Joi.string().min(5).max(30).required(),
  password: Joi.string().min(6).max(10).required(),
  avatar: Joi.string().default("/client/default.png"),
  full_name: Joi.string().required(),
  contact: Joi.string()
    .length(12)
    .pattern(/\d{2}-\d{3}-\d{2}-\d{2}/),
  email: Joi.string().email(),
  user_category_id: Joi.number().integer(),
  status: Joi.boolean().default(false),
});

module.exports = { userschema };
