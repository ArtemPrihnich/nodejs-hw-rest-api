const express = require('express')

const { validation, isValidId, authenticate } = require('../../middlewares')
const { contactSchema } = require('../../schemas')
const {contacts: controller} = require('../../controllers')

const router = express.Router()

router.get('/', authenticate, controller.getAll)

router.get('/:contactId', authenticate, isValidId, controller.getById)

router.post('/', authenticate, validation(contactSchema.addContactSchema), controller.add)

router.delete('/:contactId', authenticate, isValidId, controller.remove)

router.put('/:contactId', authenticate, isValidId, validation(contactSchema.addContactSchema), controller.updContact)

router.patch('/:contactId/favorite', authenticate, isValidId, validation(contactSchema.updContactSchema), controller.updContactStatus)

module.exports = router
