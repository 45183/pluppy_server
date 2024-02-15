const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const ProductController = require('../controller/productController');
const productController = new ProductController();


// router.get('/', productController.getProducts);
router.post('/imageupload', upload.single('image'), (req, res) => {
    res.json({ url: req.file.location });
});

router.post(
    '/new',
    productController.registerProduct
  );

  
  module.exports = router;