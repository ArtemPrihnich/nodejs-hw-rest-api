const register = require('./register')
const login = require('./login')
const current = require('./getCurrent')
const logout = require('./logout')
const updSubscription = require('./updateSubscription')
const updAvatar = require('./updateAvatar')

module.exports = {
    register,
    login,
    current,
    logout,
    updSubscription,
    updAvatar
}