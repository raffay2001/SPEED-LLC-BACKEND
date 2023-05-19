const Joi = require('joi');

const orderValidator = {
  body: Joi.object().keys({
    products: Joi.array().required(),
    status: Joi.string().required().valid('complete', 'pending'),
  }),
};

module.exports = {
    orderValidator
}