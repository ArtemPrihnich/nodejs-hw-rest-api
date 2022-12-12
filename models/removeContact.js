const getContacts = require('./getContactsList')
const updContacts = require('./updateContactsList')

const removeContact = async (id) => {
    const contacts = await getContacts();
    const idx = contacts.findIndex(item => item.id === id)
    if (idx === -1) {
        return null
    }

    const newContactsList = contacts.filter((_, index) => index !== idx)
    await updContacts(newContactsList)
    return contacts[idx]
}

module.exports = removeContact