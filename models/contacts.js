const getAll = require("./getContactsList")
const getById = require("./getContactById")
const remove = require("./removeContact")
const add = require('./addContact')
const updById = require('./updateContactById')

module.exports = {
    getAll,
    getById,
    remove,
    add,
    updById
}