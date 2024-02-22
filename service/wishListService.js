const wishListRepository = require('../repository/wishListRepository');
const cartRepository = require('../repository/cartRpository');
const { WISHLIST_CONSOLE } = require('../data/responseString');

exports.getItems = async (userId) => {
  try {
    const items = await wishListRepository.getItems(userId);

    WISHLIST_CONSOLE.SERVICE('getItems');
    return items;
  } catch (err) {
    WISHLIST_CONSOLE.SERVICE('getItems', err);
  }
};

exports.addItem = async (userId, productId) => {
  try {
    const item = await wishListRepository.addItem(userId, productId);

    WISHLIST_CONSOLE.SERVICE('addItem');
    return item;
  } catch (err) {
    WISHLIST_CONSOLE.SERVICE('addItem', err);
  }
};

exports.deleteItems = async (wishListId) => {
  try {
    await wishListRepository.deleteItems(wishListId);

    WISHLIST_CONSOLE.SERVICE('deleteItems');
  } catch (err) {
    WISHLIST_CONSOLE.SERVICE('deleteItems', err);
  }
};

exports.moveToCart = async (userId, wishListId) => {
  try {
    const productId = await wishListRepository.getProductId(wishListId);

    // wishList에서 선택된 상품 -> cartItem에 추가
    // productId와 userId를 사용해 cart에 있는지 확인
    const amount = 1;
    await cartRepository.addItem(amount, userId, productId);

    // wishList에서 이동된 상품 삭제
    await exports.deleteItems(wishListId);

    WISHLIST_CONSOLE.SERVICE('moveToCart');
  } catch (err) {
    WISHLIST_CONSOLE.SERVICE('moveToCart', err);
  }
};
