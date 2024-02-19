const Cart = require('../models/cart');
const CartItem = require('../models/cartItem');
const Product = require('../models/product');
const { CART_CONSOLE } = require('../data/responseString');

exports.getCartId = async (userId) => {
  try {
    const result = await Cart.findOne({ where: { userId: userId } });

    const cartId = result.toJSON().cartId;
    CART_CONSOLE.REPOSITORY('getCartId');

    return cartId;
  } catch (err) {
    CART_CONSOLE.REPOSITORY('getCartId', err);
  }
};

exports.checkItemsOfUser = async (cartId, productId) => {
  try {
    const result = await CartItem.findOne({
      where: { cartId: cartId, productId: productId },
    });

    if (result) {
      const cartItemId = result.toJSON().cartItemId;
      return cartItemId;
    }
    CART_CONSOLE.REPOSITORY('checkItemsOfUser');

    return;
  } catch (err) {
    CART_CONSOLE.REPOSITORY('checkItemsOfUser', err);
  }
};

exports.getItems = async (cartId) => {
  try {
    const items = await CartItem.findAll({
      where: { cartId: cartId },
      include: {
        model: Product,
      },
    });
    CART_CONSOLE.REPOSITORY('getItems');

    return items;
  } catch (err) {
    CART_CONSOLE.REPOSITORY('getItems', err);
  }
};

exports.addItem = async (cartItemId, amount, userId, productId, cartId) => {
  try {
    if (cartItemId) {
      const item = await CartItem.findByPk(cartItemId);
      item.amount += amount;
      await item.save();
      return item;
    }

    const item = CartItem.create({
      amount,
      userId,
      productId,
      cartId,
    });
    CART_CONSOLE.REPOSITORY('addItem');

    return item;
  } catch (err) {
    CART_CONSOLE.REPOSITORY('addItem', err);
  }
};

exports.setAmount = async (cartItemId, amount) => {
  try {
    const item = await CartItem.update({ amount: amount }, { where: { cartItemId: cartItemId } });

    if (item) {
      await CartItem.findOne({
        where: { cartItemId: cartItemId },
      });
      CART_CONSOLE.REPOSITORY('setAmount');
      return;
    }
    return;
  } catch (err) {
    CART_CONSOLE.REPOSITORY('setAmount', err);
  }
};

exports.deleteItems = async (cartItemId) => {
  try {
    await CartItem.destroy({ where: { cartItemId: cartItemId } });

    CART_CONSOLE.REPOSITORY('deleteItems');
  } catch (err) {
    CART_CONSOLE.REPOSITORY('deleteItems', err);
  }
};
