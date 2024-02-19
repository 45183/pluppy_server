const express = require('express');
const router = express.Router();
const ProductController = require('../controller/productController');
const productController = new ProductController();

router.get('/dog/:type', productController.getProductsOfDog);
router.get('/dog', productController.getProductsOfDog);
router.get('/cat/:type', productController.getProductsOfCat);
router.get('/cat', productController.getProductsOfCat);
router.get('/', productController.getProducts);
router.get('/:id', productController.getItem);

router.post('/new', productController.registerProduct);

module.exports = router;
