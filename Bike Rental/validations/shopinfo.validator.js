const Joi = require("joi");

const shopinfoschema = Joi.object({
  shop_name: Joi.string().min(5).max(30).required(),
  owner_name: Joi.string().min(5).max(30).required(),
  adress: Joi.string().required(),
  email_adress: Joi.string().email(),
  contact_no: Joi.string()
    .length(12)
    .pattern(/\d{2}-\d{3}-\d{2}-\d{2}/),
  website: Joi.string().required(),
  updated_by: Joi.number().integer().required(),
});

module.exports = { shopinfoschema };
