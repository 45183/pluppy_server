const cartService = require('../service/cartService');
const { responseFromMessage, responseFromData } = require('../data/responseFrom');

const { RESPONSE_TEXT, CART_MESSAGE } = require('../data/responseString');

const { CART_CONSOLE } = require('../data/responseString');

exports.getItems = async (req, res, next) => {
  try {
    // const userId = req.session.passport.user;
    const { userId } = req.body;

    const items = await cartService.getItems(userId);
    CART_CONSOLE.CONTROLLER('getItems');

    return res.status(200).json(responseFromData(RESPONSE_TEXT.SUCCESS, CART_MESSAGE.GET, items));
  } catch (err) {
    CART_CONSOLE.CONTROLLER('getItems', err);
  }
};

exports.addItem = async (req, res, next) => {
  try {
    // const userId = req.session.passport.user;
    const { amount, userId, productId } = req.body;

    if (!amount || !productId) {
      return res.status(400).json(responseFromMessage(RESPONSE_TEXT.FAIL, RESPONSE_TEXT.MISSING));
    }
    const item = await cartService.addItem(amount, userId, productId);
    CART_CONSOLE.CONTROLLER('addItem');

    return res.status(200).json(responseFromData(RESPONSE_TEXT.SUCCESS, CART_MESSAGE.CREATE, item));
  } catch (err) {
    CART_CONSOLE.CONTROLLER('addItem', err);
  }
};

exports.setAmount = async (req, res, next) => {
  try {
    const { cartItemId, amount } = req.body;

    if (!cartItemId || !amount) {
      return res.status(400).json(responseFromMessage(RESPONSE_TEXT.FAIL, RESPONSE_TEXT.MISSING));
    }

    await cartService.setAmount(cartItemId, amount);

    CART_CONSOLE.CONTROLLER('setAmount');
    return res.status(200).json(responseFromMessage(RESPONSE_TEXT.SUCCESS, CART_MESSAGE.UPDATE));
  } catch (err) {
    CART_CONSOLE.CONTROLLER('setAmount', err);
  }
};

exports.deleteItems = async (req, res, next) => {
  try {
    const { cartItemIdList } = req.body;

    if (!cartItemIdList) {
      return res.status(400).json(responseFromMessage(RESPONSE_TEXT.FAIL, RESPONSE_TEXT.MISSING));
    }

    await cartService.deleteItems(cartItemIdList);

    CART_CONSOLE.CONTROLLER('deleteItems');

    return res.status(200).json(responseFromMessage(RESPONSE_TEXT.SUCCESS, CART_MESSAGE.DELETE));
  } catch (err) {
    CART_CONSOLE.CONTROLLER('deleteItems', err);
  }
};
