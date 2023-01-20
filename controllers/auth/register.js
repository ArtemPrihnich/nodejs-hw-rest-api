const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
const {v4} = require('uuid')

const User = require('../../models/user')

const {sendEmail} = require('../../utils')

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
        
    const verificationToken = v4()
    console.log(verificationToken)

    const newUser = await User.create({ ...req.body, password: hashPassword, avatarUrl, verificationToken })
        
    const mail = {
        to: email,
        subject: 'Confirmation of registration',
        html: `<a href='http://localhost:3000/api/auth/verify/${verificationToken}' target='_blank'>Сlick to confirm</a>`
    }

        await sendEmail(mail)

    res.status(201).json({
        email: newUser.email
   })
    } catch (error) {
        next(error)
    }
}

module.exports = register