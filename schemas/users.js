const Joi = require("joi")

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const registerSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp),
    password: Joi.string().min(6).required()
})

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp),
    password: Joi.string().min(6).required()
})

const updateSchema = Joi.object({
    subscription: Joi.string().valid('starter', 'pro', 'business').required()
})

module.exports = {
    registerSchema,
    loginSchema,
    updateSchema
}