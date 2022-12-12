const contactsOperations = require('../../models/contacts')

const remove = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const contact = await contactsOperations.remove(contactId)

    if (!contact) {
      const error = new Error(`Contact with id ${contactId} not found`)
      error.status = 404
      throw error
    }

    res.json({
      status: 'success',
      code: 200,
      data: {
        contact
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = remove