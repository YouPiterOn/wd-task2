const path = require('path');

function getLoginPage(req, res) {
    res.sendFile(path.join(__dirname, '../views/login.html'));
}

function getChatPage(req, res) {
    res.sendFile(path.join(__dirname, '../views/chat.html'));
}

module.exports = {
    getLoginPage,
    getChatPage,
}