const express = require('express');
const router = express.Router();


const productController = require('../controllers/productController');

router.get('/', productController.getProductListController);
router.get('/new', productController.getProductNewController);
router.get('/:id', productController.getProductIdController);
router.post('/', productController.postProductNewController)

module.exports = router;