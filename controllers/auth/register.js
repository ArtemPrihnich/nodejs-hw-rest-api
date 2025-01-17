const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')

const User = require('../../models/user')

const register = async (req, res, next) => {
    try {
        const { email, password } = req.body
    
    const user = await User.findOne({ email })
    if (user) {
        const error = new Error(`Email in use`)
        error.status = 409
        throw error
    }

        const hashPassword = await bcrypt.hash(password, 10)
        const avatarUrl = gravatar.url(email)

    const newUser = await User.create({...req.body, password: hashPassword, avatarUrl})

    res.status(201).json({
        email: newUser.email
   })
    } catch (error) {
        next(error)
    }
}

module.exports = register