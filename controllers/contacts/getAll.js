const Contact = require('../../models/contact')

const getAll = async (req, res, next) => {
  try {
    const { _id: owner } = req.user

    const { page = 1, limit = 10, favorite } = req.query
    const skip = (page - 1) * limit

    const favoriteFilter = favorite ? favorite : { $in: [true, false] }

    const contacts = await Contact.find({ owner, favorite: favoriteFilter }, '-createdAt -updatedAt', {skip, limit}).populate('owner', 'email')
    
    res.json(contacts)
  } catch (error) {
    next(error)
  }
}

module.exports = getAll