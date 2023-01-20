const register = require('./register')
const login = require('./login')
const current = require('./getCurrent')
const logout = require('./logout')
const updSubscription = require('./updateSubscription')
const updAvatar = require('./updateAvatar')
const verifyEmail = require('./verifyEmail')
const resendVerifyEmail = require('./resendVerifyEmail')

module.exports = {
    register,
    login,
    current,
    logout,
    updSubscription,
    updAvatar,
    verifyEmail,
    resendVerifyEmail
}