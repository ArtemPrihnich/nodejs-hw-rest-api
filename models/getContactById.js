const getContacts = require("./getContactsList")

const getContactById = async (id) => {
    const contacts = await getContacts()
    const result = contacts.find(item => Number(item.id) === Number(id))
    if (!result) {
        return null
    }
    return result
}

module.exports = getContactById