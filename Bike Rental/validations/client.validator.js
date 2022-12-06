const Joi = require("joi");

const clientschema = Joi.object({
  client_code: Joi.string().required(),
  avatar: Joi.string().default("/client/default.png"),
  client_name: Joi.string().required(),
  email_address: Joi.string().email(),
  contact_number: Joi.string()
    .length(12)
    .pattern(/\d{2}-\d{3}-\d{2}-\d{2}/),
  complete_address: Joi.string().required(),
  user_name: Joi.string().required(),
  password: Joi.string().min(6).max(1000),
  status: Joi.boolean().default(false),
});

module.exports = { clientschema };
