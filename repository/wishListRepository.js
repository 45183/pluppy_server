const WishList = require('../models/wishList');

const { WISHLIST_MESSAGE } = require('../data/responseString');
const Product = require('../models/product');

exports.getProductId = async (wishListId) => {
  try {
    const productId = await WishList.findOne({
      attributes: ['productId'],
      where: { wishListId: wishListId },
    });

    // console.log(productId);
    WISHLIST_MESSAGE.REPOSITORY('getProductId');
    return productId.toJSON().productId;
  } catch (err) {
    WISHLIST_MESSAGE.REPOSITORY('getProductId', err);
  }
};

exports.getItems = async (userId) => {
  try {
    const items = await WishList.findAll({
      where: { userId: userId },
      include: { model: Product },
    });
    WISHLIST_MESSAGE.REPOSITORY('getItems');
    return items;
  } catch (err) {
    WISHLIST_MESSAGE.REPOSITORY('getItems', err);
  }
};

exports.addItem = async (userId, productId) => {
  try {
    const item = await WishList.create({ userId, productId });

    WISHLIST_MESSAGE.REPOSITORY('addItem');
    return item;
  } catch (err) {
    WISHLIST_MESSAGE.REPOSITORY('addItem', err);
  }
};

exports.deleteItems = async (wishListId) => {
  try {
    await WishList.destroy({ where: { wishListId: wishListId } });

    WISHLIST_MESSAGE.REPOSITORY('deleteItems');
  } catch (err) {
    WISHLIST_MESSAGE.REPOSITORY('deleteItems', err);
  }
};
