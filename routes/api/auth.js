const express = require('express')

const { validation, authenticate, upload } = require('../../middlewares')
const { userSchema } = require('../../schemas')
const {auth: controller} = require('../../controllers')

const router = express.Router()

router.post('/register', validation(userSchema.registerSchema), controller.register)

router.get('/verify/:verificationToken', controller.verifyEmail)

router.post('/verify', validation(userSchema.verifyEmailSchema), controller.resendVerifyEmail)

router.post('/login', validation(userSchema.loginSchema), controller.login)

router.get('/current', authenticate, controller.current)

router.get('/logout', authenticate, controller.logout)

router.patch('/subscription', authenticate, validation(userSchema.updateSchema), controller.updSubscription)

router.patch('/avatars', authenticate, upload.single('avatar'), controller.updAvatar)

module.exports = router