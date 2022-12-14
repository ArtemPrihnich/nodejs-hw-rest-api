const { isValidObjectId } = require('mongoose')

const isValidId = (req, res, next) => {
    const { contactId } = req.params
    console.log(contactId)
    if (!isValidObjectId(contactId)) {
        const error = new Error('id is not valid')
        error.status = 404
        throw error
    }
    next()
}

module.exports = isValidId