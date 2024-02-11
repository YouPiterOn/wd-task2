const { User } = require("../models/user");

async function findUserById(id) {
    const user = await User.findOne({ id: id });
    if(!user) {
        return null;
    }
    return user;
}

module.exports = {
    findUserById,
}