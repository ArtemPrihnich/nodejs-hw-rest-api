const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../../models/user')

const {SECRET_KEY} = process.env

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
    
        const user = await User.findOne({ email })
        if (!user) {
            const error = new Error("Email or password is wrong")
            error.status = 401
            throw error
        }
        
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            const error = new Error("Email or password is wrong")
            error.status = 401
            throw error 
        }

        if (!user.verify) {
            const error = new Error("Email not verify")
            error.status = 403
            throw error 
        }

        const payload = {
            id: user._id
        }

        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '23h' })
        await User.findByIdAndUpdate(user._id, {token})

        res.json({
            token
        })

    } catch (error) {
        next(error)
    }
}

module.exports = login