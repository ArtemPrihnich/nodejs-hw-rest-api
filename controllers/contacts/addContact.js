// const contactsOperations = require('../../models/contacts')
const Contact = require('../../models/contact')

const add = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body)

    res.json(contact)
  //   const contact = await contactsOperations.add(req.body)
  //   res.status(201).json({
  //     status: 'success',
  //     code: 201,
  //     data: {
  //       contact
  //     }
  // })
  } catch (error) {
    next(error)
  }
}

module.exports = add