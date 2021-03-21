const Joi = require("joi");

const index = Joi.number().positive();

const validate = (toValidate) => {
  const { error } = index.validate(toValidate, { abortEarly: false });
  if (error) {
    throw new error();
  }
};

module.exports = validate;
