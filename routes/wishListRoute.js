const express = require('express');
const wishListController = require('../controller/wishListController');

const router = express.Router();

router.get('/', wishListController.getItems);
router.post('/new', wishListController.addItem);
router.post('/moveToCart', wishListController.moveToCart);

router.delete('/delete', wishListController.deleteItems);

module.exports = router;
