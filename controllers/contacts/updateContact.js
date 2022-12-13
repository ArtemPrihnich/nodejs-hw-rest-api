// const contactsOperations = require('../../models/contacts')
const Contact = require("../../models/contact")

const updContact = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const contact = await Contact.findByIdAndUpdate(contactId, req.body, {new:true})

    if (!contact) {
      const error = new Error(`Contact with id ${contactId} not found`)
      error.status = 404
      throw error
    }

    res.json(contact)
    // const { contactId } = req.params
    // const contact = await contactsOperations.updById(contactId, req.body)

    // if (!contact) {
    //   const error = new Error(`Contact with id ${contactId} not found`)
    //   error.status = 404
    //   throw error
    // }

    // res.json({
    //   status: 'success',
    //   code: 200,
    //   data: {
    //     contact
    //   }
    // })
  } catch (error) {
    next(error)
  }
}

module.exports = updContact