function setCookie(res, cookieTitle, cookieValue, httpOnly = true) {
    res.setHeader('Set-Cookie', `${cookieTitle}=${cookieValue}; HttpOnly=${httpOnly}`);
};

function getCookie(req, cookieTitle) {
    const cookieHeader = req.headers.cookie;
    if (cookieHeader) {
        const cookies = cookieHeader.split('; ');
        for (const cookie of cookies) {
            const [name, value] = cookie.split('=');
            if (name == cookieTitle) {
                return decodeURIComponent(value);
            }
        }
    }
    return null;
};

module.exports = {
    setCookie,
    getCookie
}