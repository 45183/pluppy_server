const cartRepository = require('../repository/cartRpository');
const { CART_CONSOLE } = require('../data/responseString');

exports.getItems = async (userId) => {
  try {
    const cartId = await cartRepository.getCartId(userId);

    const items = await cartRepository.getItems(cartId);

    CART_CONSOLE.SERVICE('getItems');
    return items;
  } catch (err) {
    CART_CONSOLE.SERVICE('getItems', err);
  }
};

exports.addItem = async (amount, userId, productId) => {
  try {
    const cartId = await cartRepository.getCartId(userId);

    const cartItemId = await cartRepository.checkItemsOfUser(cartId, productId);

    const item = await cartRepository.addItem(cartItemId, amount, userId, productId, cartId);
    CART_CONSOLE.SERVICE('addItem');

    return item;
  } catch (err) {
    CART_CONSOLE.SERVICE('addItem', err);
  }
};

exports.setAmount = async (cartItemId, amount) => {
  try {
    const item = await cartRepository.setAmount(cartItemId, amount);
    CART_CONSOLE.SERVICE('setAmount');

    return item;
  } catch (err) {
    CART_CONSOLE.SERVICE('setAmount', err);
  }
};

exports.deleteItems = async (cartItemIdList) => {
  try {
    await Promise.all(
      cartItemIdList.map(async (cartItemId) => {
        await cartRepository.deleteItems(cartItemId);
      }),
    );
    CART_CONSOLE.SERVICE('deleteItems');
  } catch (err) {
    CART_CONSOLE.SERVICE('deleteItems', err);
  }
};
