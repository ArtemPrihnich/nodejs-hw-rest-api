const Contact = require('../../models/contact')

const getAll = async (req, res, next) => {
  try {
    const { _id: owner } = req.user

    const { page = 1, limit = 10 } = req.query
    const skip = (page - 1) * limit

    const contacts = await Contact.find({owner}, '-createdAt -updatedAt', {skip, limit}).populate('owner', 'email')
    
    res.json(contacts)
  } catch (error) {
    next(error)
  }
}

module.exports = getAll