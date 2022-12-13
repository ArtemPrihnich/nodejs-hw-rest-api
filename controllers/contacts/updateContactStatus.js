const Contact = require("../../models/contact")

const updContactStatus = async (req, res, next) => {
    try {
        const { contactId } = req.params

        if (!req.body) {
            const error = new Error(`missing field favorite`)
            error.status = 400
            throw error
        }

        const contact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true })
        
        if (!contact) {
            const error = new Error(`Contact with id ${contactId} not found`)
            error.status = 404
            throw error
        }

        res.json(contact)
    } catch (error) {
        next(error)
    }
}

module.exports = updContactStatus