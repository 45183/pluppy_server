const wishListService = require('../service/wishListService');
const { responseFromMessage, responseFromData } = require('../data/responseFrom');
const { RESPONSE_TEXT, WISHLIST_MESSAGE, WISHLIST_CONSOLE } = require('../data/responseString');

exports.getItems = async (req, res) => {
  try {
    // const userId = req.session.passport.user;
    const { userId } = req.body;

    const items = await wishListService.getItems(userId);

    if (!items) {
      return res.status(200).json(responseFromMessage(RESPONSE_TEXT.SUCCESS, RESPONSE_TEXT.ZERO));
    }

    WISHLIST_CONSOLE.CONTROLLER('getItems');

    return res
      .status(200)
      .json(responseFromData(RESPONSE_TEXT.SUCCESS, WISHLIST_MESSAGE.GET, items));
  } catch (err) {
    WISHLIST_CONSOLE.CONTROLLER('getItems', err);
    return res.status(500).json(responseFromMessage(RESPONSE_TEXT.FAIL, WISHLIST_MESSAGE.ERROR));
  }
};

exports.addItem = async (req, res) => {
  try {
    // const userId = req.session.passport.user;
    const { userId, productId } = req.body;

    if (!productId) {
      WISHLIST_MESSAGE.CONTROLLER('addItem', ': productId 미입력');
      return res.status(400).json(responseFromMessage(RESPONSE_TEXT.FAIL, RESPONSE_TEXT.MISSING));
    }

    const item = await wishListService.addItem(userId, productId);
    WISHLIST_CONSOLE.CONTROLLER('addItem');

    return res
      .status(201)
      .json(responseFromData(RESPONSE_TEXT.SUCCESS, WISHLIST_MESSAGE.CREATE, item));
  } catch (err) {
    WISHLIST_CONSOLE.CONTROLLER('addItem', err);
    return res.status(500).json(responseFromMessage(RESPONSE_TEXT.FAIL, WISHLIST_MESSAGE.ERROR));
  }
};

exports.deleteItems = async (req, res) => {
  try {
    const { wishListIdList } = req.body;

    await wishListService.deleteItems(JSON.parse(wishListIdList));
    WISHLIST_CONSOLE.CONTROLLER('deleteItems');

    return res
      .status(200)
      .json(responseFromMessage(RESPONSE_TEXT.SUCCESS, WISHLIST_MESSAGE.DELETE));
  } catch (err) {
    WISHLIST_CONSOLE.CONTROLLER('deleteItems', err);
    return res.status(500).json(responseFromMessage(RESPONSE_TEXT.FAIL, WISHLIST_MESSAGE.ERROR));
  }
};

exports.moveToCart = async (req, res) => {
  try {
    // const userId = req.session.passport.user;
    const { userId, wishListIdArray } = req.body;

    await wishListService.moveToCart(userId, JSON.parse(wishListIdArray));
    WISHLIST_CONSOLE.CONTROLLER('moveToCart');

    return res.status(200).json(responseFromMessage(RESPONSE_TEXT.SUCCESS, WISHLIST_MESSAGE.MOVE));
  } catch (err) {
    WISHLIST_CONSOLE.CONTROLLER('moveToCart', err);
    return res.status(500).json(responseFromMessage(RESPONSE_TEXT.FAIL, WISHLIST_MESSAGE.ERROR));
  }
};
