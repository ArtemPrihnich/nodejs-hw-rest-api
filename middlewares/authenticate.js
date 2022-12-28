const jwt = require('jsonwebtoken')
const { SECRET_KEY } = process.env

const User = require('../models/user')

const authoriazation = async (req, res, next) => {
    const { authorization = '' } = req.headers
    const [bearer, token] = authorization.split(' ')
    if (bearer !== 'Bearer') {
        const error = new Error('Not authorized')
        error.status = 401
        next(error)
    }

    try {
        const { id } = jwt.verify(token, SECRET_KEY)
        const user = await User.findById(id)
        if (!user || !user.token) {
            const error = new Error('Not authorized')
            error.status = 401
            throw error
        }
        req.user = user
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authoriazation