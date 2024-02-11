const headerHandlers = require("../handlers/headerHandlers");

function setHeader(req, res) {
    const headerName = req.query.name;
    const headerValue = req.query.value;
    headerHandlers.setHeader(res, headerName, headerValue);
    res.json({ message: 'Header set successfully', name: headerName, value: headerValue });
}
  
function getHeader(req, res) {
    const headerName = req.params.headerName;
    const headerValue = headerHandlers.getHeader(req, headerName);
    if (headerValue !== undefined) {
        res.json({ [headerName]: headerValue });
    } else {
        res.status(404).json({ message: 'Header not found' });
    }
}

module.exports = {
    setHeader,
    getHeader,
}