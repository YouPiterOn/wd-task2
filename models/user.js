const mongoose = require("mongoose");
const Schema =  require("mongoose").Schema;

const UserSchema = new Schema({
    id: String,
    username: String,
    isAdmin: Boolean,
    email: String,
    password: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = {
    UserSchema,
    User,
};