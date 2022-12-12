const getAll = require('./getAll')
const getById = require('./getById')
const add = require('./addContact')
const remove = require('./removeContact')
const updContact = require('./updateContact')

module.exports = {
    getAll,
    getById,
    add,
    remove,
    updContact
}