const getAll = require('./getAll')
const getById = require('./getById')
const add = require('./addContact')
const remove = require('./removeContact')
const updContact = require('./updateContact')
const updContactStatus = require('./updateContactStatus')

module.exports = {
    getAll,
    getById,
    add,
    remove,
    updContact,
    updContactStatus
}