const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

require('dotenv').config();

// AWS 서비스 액세스 정보
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESSKEYID,
  secretAccessKey: process.env.AWS_SECRETACCESSKEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

const storage = multerS3({
    s3: s3,
    acl: 'public-read-write', // 파일 액세스 권한 - 읽기/쓰기 모두 가능
    bucket: process.env.AWS_BUCKETNAME,
    contentType: multerS3.AUTO_CONTENT_TYPE, // 파일 컨텐츠 타입 자동 감지
    key: function (req, file, cb) {
      cb(null, `${Date.now()}` + '_' + file.originalname.split('.').pop()); // 파일 이름 형식
    },
  });


module.exports = multer({storage: storage});