const Joi = require("joi");

const adsmanagementschema = Joi.object({
  shop_id: Joi.number().integer(),
  banner_image: Joi.string().min(5).max(40).required(),
  description: Joi.string().min(5).max(40).required(),
  start_date: Joi.date().required(),
  end_date: Joi.date().required(),
  amount: Joi.number().integer().required(),
  user_id: Joi.number().integer(),

});

module.exports = { adsmanagementschema };
