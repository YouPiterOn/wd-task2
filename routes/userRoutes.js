const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.getUserListController);
router.get('/:id', userController.getUserByIdController);
router.post('/', userController.postUserNewController);
router.put('/', userController.putUserController);
router.patch('/', userController.patchUserController);
router.delete('/', userController.deleteUserController);

module.exports = router;