const getContactsList = require("./getContactsList")
const updContacts = require('./updateContactsList')

const updateContactById = async (id, data) => {
    const contacts = await getContactsList();
    const idx = contacts.findIndex(item => item.id === id);
    if(idx === -1) {
        return null;
    }

    contacts[idx] = {id, ...data};
    await updContacts(contacts);

    return contacts[idx]
}

module.exports = updateContactById