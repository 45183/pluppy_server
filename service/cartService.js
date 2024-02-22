const cartRepository = require('../repository/cartRpository');
const { CART_CONSOLE } = require('../data/responseString');

exports.getItems = async (userId) => {
  try {
    const data = await cartRepository.getItems(userId);

    CART_CONSOLE.SERVICE('getItems');
    return data;
  } catch (err) {
    CART_CONSOLE.SERVICE('getItems', err);
  }
};

exports.addItem = async (amount, userId, productId) => {
  try {
    const item = await cartRepository.addItem(amount, userId, productId);
    CART_CONSOLE.SERVICE('addItem');

    return item;
  } catch (err) {
    CART_CONSOLE.SERVICE('addItem', err);
  }
};

exports.setAmount = async (cartId, amount) => {
  try {
    const item = await cartRepository.setAmount(cartId, amount);
    CART_CONSOLE.SERVICE('setAmount');

    return item;
  } catch (err) {
    CART_CONSOLE.SERVICE('setAmount', err);
  }
};

exports.deleteItems = async (cartId) => {
  try {
    await cartRepository.deleteItems(cartId);

    CART_CONSOLE.SERVICE('deleteItems');
  } catch (err) {
    CART_CONSOLE.SERVICE('deleteItems', err);
  }
};
