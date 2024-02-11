const express = require('express');
const router = express.Router();

const headerController = require('../controllers/headerController');

//get header doesnt work, and i have 0 ideas how to fix it :(
router.get('/get/:headerName', headerController.getHeader);
//http://localhost:4000/header/set?name=my&value=newHeader
router.get('/set', headerController.setHeader);

module.exports = router;