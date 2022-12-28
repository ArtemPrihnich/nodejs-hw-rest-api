const fs = require('fs/promises')
const path = require('path')
// const Jimp = require('jimp')

const User = require('../../models/user')

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars')

const updateAvatar = async(req, res, next) => {
    try {
        const { path: tempUpload, originalname } = req.file
        const { _id } = req.user
        const filename = `${_id}_${originalname}`
        const resultUpload = path.join(avatarsDir, filename)
        // console.log(tempUpload)

        // const test = await Jimp.read(`${tempUpload}`).then(change => change.resize(250, 250).write(filename)).catch(err => console.log(err))
        // console.log(test)

        await fs.rename(tempUpload, resultUpload)

        const avatarUrl = path.join('avatars', originalname)

        await User.findByIdAndUpdate(_id, { avatarUrl })
        
        res.json({
            avatarUrl
        })
    } catch (error) {
        next(error)
    }
}

module.exports = updateAvatar