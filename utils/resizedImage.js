const jimp = require('jimp')
const fs = require('fs/promises')

const resizeImg = async (avatar, resizedAvatar) => {
    try {
        await jimp.read(avatar).then(image => image.resize(250, 250).write(resizedAvatar))
        await fs.unlink(avatar)
    } catch (error) {
        console.log(error)
    }
}

module.exports = resizeImg