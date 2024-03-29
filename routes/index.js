const express = require('express');
const indexController = require("../controller/indexController");
const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");

const router = express.Router();

router.get('/', indexController.index)
router.get('/user',indexController.usersIndex);


router.use((err, req, res, next) => {
    res.status(500).json(response.responseFromData(resTEXT.RESPONSE_TEXT.FAIL, resTEXT.INDEX_MESSAGE.ERROR, err));
});

module.exports = router;
