const Joi = require("joi")

const addContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.bool()
})

const updContactSchema = Joi.object({
  favorite: Joi.bool().required()
})

module.exports = {
  addContactSchema,
  updContactSchema
}