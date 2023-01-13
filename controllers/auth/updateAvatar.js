const path = require('path')
const resizeImage = require('../../utils')

const User = require('../../models/user')

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars')

const updateAvatar = async(req, res, next) => {
    try {
        const { path: tempUpload, originalname } = req.file
        const { _id } = req.user
        const filename = `${_id}_${originalname}`
        const resultUpload = path.join(avatarsDir, filename)
       
        await resizeImage(tempUpload, resultUpload)

        const avatarUrl = path.join('avatars', filename)

        await User.findByIdAndUpdate(_id, { avatarUrl })
        
        res.json({
            avatarUrl
        })
    } catch (error) {
        next(error)
    }
}

module.exports = updateAvatar