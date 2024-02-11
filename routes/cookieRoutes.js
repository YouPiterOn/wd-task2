const express = require('express');
const router = express.Router();


const cookieController = require('../controllers/cookieController');
//http://localhost:4000/cookie/get/my
router.get('/get/:cookieName', cookieController.getCookie);
//http://localhost:4000/cookie/set?name=my&value=favorite
router.get('/set', cookieController.setCookie);

module.exports = router;