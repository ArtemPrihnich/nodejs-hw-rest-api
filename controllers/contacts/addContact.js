const Contact = require('../../models/contact')

const add = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body)

    res.json(contact)
  } catch (error) {
    next(error)
  }
}

module.exports = add