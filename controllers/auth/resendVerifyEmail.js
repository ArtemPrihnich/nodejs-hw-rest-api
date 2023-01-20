const User = require('../../models/user')

const {sendEmail} = require('../../utils')

const resendVerifyEmail = async (req, res, next) => {
    try {
        const {email} = req.body
        const user = User.findOne({ email })
        
        if (!user) {
            const error = new Error("Not Found")
            error.status = 404
            throw error
        }
        if (user.verify) {
            const error = new Error("User already verify")
            error.status = 400
            throw error
        }

        const mail = {
            to: email,
            subject: 'Confirmation of registration',
            html: `<a href='http://localhost:3000/api/auth/verify/${verificationToken}' target='_blank'>Сlick to confirm</a>`
        }

        await sendEmail(mail)

        res.json({
            message: 'Email verify resend'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = resendVerifyEmail