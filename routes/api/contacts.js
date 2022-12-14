const express = require('express')

const { validation, isValidId } = require('../../middlewares')
const { contactSchema } = require('../../schemas')
const {contacts: controller} = require('../../controllers')

const router = express.Router()

router.get('/', controller.getAll)

router.get('/:contactId', isValidId, controller.getById)

router.post('/', validation(contactSchema.addContactSchema), controller.add)

router.delete('/:contactId', isValidId, controller.remove)

router.put('/:contactId', isValidId, validation(contactSchema.addContactSchema), controller.updContact)

router.patch('/:contactId/favorite', isValidId, validation(contactSchema.updContactSchema), controller.updContactStatus)

module.exports = router
