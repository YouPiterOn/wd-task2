const cookieHandlers = require("../handlers/cookieHandlers");

function setCookie(req, res) {
    const cookieName = req.query.name;
    const cookieValue = req.query.value;
    cookieHandlers.setCookie(res, cookieName, cookieValue);
    res.json({ message: 'Cookie set successfully', name: cookieName, value: cookieValue });
};
  
function getCookie(req, res) {
    const cookieName = req.params.cookieName;
    const cookieValue = cookieHandlers.getCookie(req, cookieName);
    if (cookieValue !== null) {
        res.json({ [cookieName]: cookieValue });
    } else {
        res.status(404).json({ message: 'Cookie not found' });
    }
}
  
module.exports = {
    setCookie,
    getCookie,
}