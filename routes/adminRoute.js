const express = require('express');
const router = express.Router();
const authService = require("../service/authService");
const userController = require("../controller/userController");
const indexController = require("../controller/indexController");
const orderController = require("../controller/orderController");
const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");

router.get('/user', authService.isLoggedIn, indexController.usersIndex);
router.get('/user/:userId',authService.isLoggedIn, userController.findUser);
router.get('/orderList', authService.isLoggedIn, indexController.ordersIndex);
router.get('/order/:userId/:createdAt', authService.isLoggedIn, orderController.findOrder);

router.use((req, res, next) => {
    next('Not found error!');
});

router.use((err, req, res, next) => {
    res.status(500).json(response.responseFromData(resTEXT.RESPONSE_TEXT.FAIL,resTEXT.ADMIN_MESSAGE.ERROR, err));
});


module.exports = router;