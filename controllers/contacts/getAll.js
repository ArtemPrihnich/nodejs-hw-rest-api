// const contactsOperations = require("../../models/contacts")
const Contact = require('../../models/contact')

const getAll = async (req, res, next) => {
  try {
    const contacts = await Contact.find()
    res.json(contacts)
  //   const contacts = await contactsOperations.getAll()
  //   res.json({
  //     status: 'success',
  //     code: 200,
  //     data: {
  //       contacts
  //     }
  // })
  } catch (error) {
    next(error)
  }
}

module.exports = getAll