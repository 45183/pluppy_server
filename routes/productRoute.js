const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const ProductController = require('../controller/productController');
const productController = new ProductController();


// router.get('/', productController.getProducts);
router.post('/imageupload', upload.array('imgUpload'), (req, res) => {
    console.log(req.file);
    console.log(req.body.subject);
    res.send('이미지가 업로드 되었습니다.');
});
router.post(
    '/filesUpload',
    upload.files([
      { name: 'upload1' },
      { name: 'upload2' },
      { name: 'upload3' },
      { name: 'upload4' },
      { name: 'upload5' },
    ]),
    (req, res) => {
      console.log(req.files.upload1);
      console.log(req.body.subject);
      res.send('upload!');
    }
  );
// array 메서드 사용 -> 데이터를 전달해주는 input 태그에 multiple 속성 추가해야함.
// <input type="file" name="imgUpload" multiple />

router.post(
    '/newProduct',
    productController.registerProduct
  );
router.put(
  '/updateProduct',
  productController.
)

  
  module.exports = router;