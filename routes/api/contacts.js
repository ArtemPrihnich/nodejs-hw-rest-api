const express = require('express')

const { validation } = require('../../middlewares')
const { contactSchema } = require('../../schemas')
const {contacts: controller} = require('../../controllers')

const router = express.Router()

router.get('/', controller.getAll)

router.get('/:contactId', controller.getById)

router.post('/', validation(contactSchema), controller.add)

router.delete('/:contactId', controller.remove)

router.put('/:contactId', validation(contactSchema), controller.updContact)

module.exports = router
