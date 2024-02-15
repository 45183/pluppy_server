const multer = require('multer');


require('dotenv').config();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, '../routes/upload')
  },
  filename: function (req, file, cb) {
    const extension = file.originalname.split('.').pop();
    cb(null, Date.now() + '_' + file.originalname.replace(`.${extension}`)); // 파일 이름 형식
    },

  // 파일 허용 사이즈 (5MB)
  limits: { fileSize: 5 * 1024 * 1024 }
  });

  
const upload = multer({storage: storage});

module.exports = upload;