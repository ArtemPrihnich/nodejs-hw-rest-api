const Contact = require('../../models/contact')

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const contact = await Contact.findById(contactId)

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

module.exports = getById