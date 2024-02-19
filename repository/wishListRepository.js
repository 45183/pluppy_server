const WishList = require('../models/wishList');

const { WISHLIST_CONSOLE } = require('../data/responseString');
const Product = require('../models/product');

exports.getProductId = async (wishListId) => {
  try {
    const productId = await WishList.findOne({
      attributes: ['productId'],
      where: { wishListId: wishListId },
    });

    // console.log(productId);
    WISHLIST_CONSOLE.REPOSITORY('getProductId');
    return productId.toJSON().productId;
  } catch (err) {
    WISHLIST_CONSOLE.REPOSITORY('getProductId', err);
  }
};

exports.getItems = async (userId) => {
  try {
    const items = await WishList.findAll({
      where: { userId: userId },
      include: { model: Product },
    });
    WISHLIST_CONSOLE.REPOSITORY('getItems');
    return items;
  } catch (err) {
    WISHLIST_CONSOLE.REPOSITORY('getItems', err);
  }
};

exports.addItem = async (userId, productId) => {
  try {
    const item = await WishList.create({ userId, productId });

    WISHLIST_CONSOLE.REPOSITORY('addItem');
    return item;
  } catch (err) {
    WISHLIST_CONSOLE.REPOSITORY('addItem', err);
  }
};

exports.deleteItems = async (wishListId) => {
  try {
    await WishList.destroy({ where: { wishListId: wishListId } });

    WISHLIST_CONSOLE.REPOSITORY('deleteItems');
  } catch (err) {
    WISHLIST_CONSOLE.REPOSITORY('deleteItems', err);
  }
};
