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

// const fs = require('fs/promises')

// const listContacts = async () => {}

// const getContactById = async (contactId) => {}

// const removeContact = async (contactId) => {}

// const addContact = async (body) => {}

// const updateContact = async (contactId, body) => {}

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// }
