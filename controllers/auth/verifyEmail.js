const User = require('../../models/user')

const verifyEmail = async (req, res, next) => {
    try {
    const { verificationToken } = req.params
    const user = await User.findOne({ verificationToken })
    
    if (!user) {
        const error = new Error('Not Found')
        error.status = 404
        throw error
    }
        
    await User.findByIdAndUpdate(user._id, { verify: true, verificationToken: ''})
        
    res.json({
        message: 'Email verify success'
    })

    } catch (error) {
        next(error)
    }
}

module.exports = verifyEmail