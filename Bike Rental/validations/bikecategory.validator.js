const Joi = require("joi");

const bikecategoryschema = Joi.object({
  category_name: Joi.string().min(5).max(30).required(),
  description: Joi.string().required(),
});

module.exports = { bikecategoryschema };
