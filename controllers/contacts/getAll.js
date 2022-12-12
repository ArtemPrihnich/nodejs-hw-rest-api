const contactsOperations = require("../../models/contacts")

const getAll = async (req, res, next) => {
  try {
    const contacts = await contactsOperations.getAll()
    res.json({
      status: 'success',
      code: 200,
      data: {
        contacts
      }
  })
  } catch (error) {
    next(error)
  }
}

module.exports = getAll