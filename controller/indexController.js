const userService = require("../service/userService");
const orderService = require('../service/orderService');
const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");

exports.index = async (req, res) => res.status(200).send("<h1>Test</h1>");

exports.usersIndex = async (req, res, next) => {
    await userService.findAllUser()
        .then((users) => res.status(200).json(response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.USER_MESSAGE.GET, users)))
        .catch(err => {
            console.error(err);
            next(err);
        });
};

exports.ordersIndex = async (req, res, next) => {
    await orderService.allOrder()
        .then((orders) => res.status(200).json(response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.ORDER_MESSAGE.GET, orders)))
        .catch(err => {
            console.error(err);
            next(err);
        });
}