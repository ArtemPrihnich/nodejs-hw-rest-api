const { v4 } = require("uuid")
const getContacts = require("./getContactsList")
const updContacts = require('./updateContactsList')

const addContact = async (data) => {
    const contacts = await getContacts()
    const newContact = { ...data, id: v4() }
    contacts.push(newContact)
    await updContacts(contacts)
    return newContact
} 

module.exports = addContact