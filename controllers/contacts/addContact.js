const Contact = require('../../models/contact')

const add = async (req, res, next) => {
  try {
    const {_id: owner} = req.user
    const contact = await Contact.create({...req.body, owner})

    res.json(contact)
  } catch (error) {
    next(error)
  }
}

module.exports = add