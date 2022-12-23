const User = require('../../models/user')

const updateSubscription = async (req, res, next) => {
    try {
        const { _id } = req.user
    
        const user = await User.findByIdAndUpdate(_id, req.body, {new: true})

        res.json({
            user
        })
    } catch (error) {
        next(error)
    }
}

module.exports = updateSubscription