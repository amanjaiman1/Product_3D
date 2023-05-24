const bcrypt = require('bcrypt')
module.exports.hashPassword = async (password) => {
    return await bcrypt.hashSync(password,10);
}