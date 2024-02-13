const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer');
const ProductController = require('../controller/productController');
const productController = new ProductController();


// router.get('/', productController.getProducts);
router.post('/imageupload', multer.single('image'), (req, res) => {
    res.json({ url: req.file.location });
});

router.post(
    '/newProduct',
    productController.registerProduct
  );

  
  module.exports = router;