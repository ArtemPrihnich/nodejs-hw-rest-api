const express = require('express')

const { validation } = require('../../middlewares')
const { userSchema } = require('../../schemas')
const {auth: controller} = require('../../controllers')

const router = express.Router()

router.post('/register', validation(userSchema.registerSchema), controller.register)

router.post('/login', validation(userSchema.loginSchema), controller.login)

module.exports = router