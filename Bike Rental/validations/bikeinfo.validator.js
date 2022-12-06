const Joi = require("joi");

const bikeinfoschema = Joi.object({
  bike_category_id: Joi.number().integer(),
  shop_id: Joi.number().integer(),
  bike_name: Joi.string().min(5).max(40).required(),
  specs: Joi.string().required(),
  rent_price: Joi.number().required(),
  availability: Joi.boolean().default(false),
  user_id: Joi.number().integer(),
});

module.exports = { bikeinfoschema };
