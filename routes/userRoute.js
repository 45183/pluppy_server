const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const userController = require("../controller/userController");
const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");

router.use(bodyParser.json());

router.get('/', userController.getUser);
router.post('/signUp', userController.createUser);
router.get('/:userId', authService.isLoggedIn, userController.findUser);
router.put('/updateUser/:userId', authService.isLoggedIn, userController.updateUser);
router.get('/deleteUser/:userId', authService.isLoggedIn, userController.deleteUser, authController.logout);

router.use((req, res, next) => {
    next('Not found error!');
});



router.use((err, req, res, next) => {
    res.status(500).json(response.responseFromData(resTEXT.RESPONSE_TEXT.FAIL, resTEXT.USER_MESSAGE.ERROR, err));
});

module.exports = router;
