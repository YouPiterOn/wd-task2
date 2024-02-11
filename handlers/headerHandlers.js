function setHeader(res, headerName, headerValue) {
    res.setHeader(headerName, headerValue);
};

function getHeader(req, headerName) {
    return req.header(headerName);
};

module.exports = {
    setHeader,
    getHeader
}