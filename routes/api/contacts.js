const express = require('express')
const Joi = require("joi")
const contactsOperations = require('../../models/contacts')

const router = express.Router()

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required()
})

router.get('/', async (req, res, next) => {
  // res.json({ message: 'template message' })
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
})

router.get('/:contactId', async (req, res, next) => {
  // res.json({ message: 'template message' })
  try {
    const { contactId } = req.params;
    const contact = await contactsOperations.getById(contactId)

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
})

router.post('/', async (req, res, next) => {
  // res.json({ message: 'template message' })
  try {
    const { error } = contactSchema.validate(req.body)

    if (error) {
      error.status = 400
      throw error
    }
    const contact = await contactsOperations.add(req.body)
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        contact
      }
  })
  } catch (error) {
    next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  // res.json({ message: 'template message' })
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
})

router.put('/:contactId', async (req, res, next) => {
  // res.json({ message: 'template message' })
  try {
    const { error } = contactSchema.validate(req.body)
    
    if (error) {
      error.status = 400
      throw error
    }

    const { contactId } = req.params
    const contact = await contactsOperations.updById(contactId, req.body)

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
})

module.exports = router
