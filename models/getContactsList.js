const fs = require("fs/promises")
const path = require('./contactsPath')

const getAllContacts = async () => {
    const data = await fs.readFile(path)
    const list = JSON.parse(data)
    return list
}

module.exports = getAllContacts