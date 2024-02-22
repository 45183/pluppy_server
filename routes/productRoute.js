const express = require('express');
const router = express.Router();
const ProductController = require('../controller/productController');
const productController = new ProductController();

router.get('/main/:id', productController.getProductsOfMain);
router.get('/sub/:id', productController.getProductsOfSub);
router.get('/', productController.getProducts);
router.get('/:id', productController.getItem);

router.post('/new', productController.registerProduct);

module.exports = router;
